import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { createOAuthUser, findUserByEmail } from "@/lib/user.service";
import { JWT } from "next-auth/jwt";
import { Account, Session, User } from "next-auth";

export const authOptions = {
  session: {
    strategy: "jwt" as const,
  },

  providers: [
    // ---------------- CREDENTIALS ----------------
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          // here code changes
          throw new Error("Email and password are required");
        }

        const user = await findUserByEmail(credentials.email);

        if (!user) {
          // here code changes
          throw new Error("No account found with this email");
        }

        if (!user.password) {
          // here code changes
          throw new Error(
            "This account was created using Google. Please sign in with Google"
          );
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          // here code changes
          throw new Error("Incorrect password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),

    // ---------------- GOOGLE ----------------
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    // 🔑 Always sync JWT with DB
    async jwt({ token }: { token: JWT }) {
      if (!token.email) return token;

      const dbUser = await findUserByEmail(token.email);

      // here code changes — HARD INVALIDATION
      if (!dbUser) {
        return token; // Return token, session callback will handle invalid state
      }

      token.id = dbUser._id.toString();
      token.role = dbUser.role;
      token.name = dbUser.name;
      token.image = dbUser.image;

      return token;
    },

    // 🧾 Session is derived from JWT only
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },

    // 🛂 OAuth first-login handler
    async signIn({ account, user }: { account: Account | null; user: User }) {
      if (account?.provider !== "google") return true;

      if (!user.email) return false;

      try {
        const existingUser = await findUserByEmail(user.email);

        if (!existingUser) {
          const newUser = await createOAuthUser({
            name: user.name as string,
            email: user.email,
            image: user.image as string,
            role: "user",
            provider: "google",
          });

          if (!newUser) {
            return false;
          }
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXT_AUTH_SECRET,
};
