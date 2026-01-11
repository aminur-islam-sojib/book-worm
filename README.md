# 📚 BookWorm

> Secure Book Recommendation & Reading Tracker Application

**BookWorm** is a full-stack, role-based web application that helps users discover books, track reading progress, and receive personalized recommendations. The platform enforces mandatory authentication for all routes, ensuring a secure and controlled user experience.

This project was built as part of a technical evaluation to demonstrate real-world application architecture, including authentication, authorization, CRUD operations, admin moderation, and production-ready deployment.

---

## 🔗 Live Demo

> **🔒 Note:** Login is required to access all features.

- **Live Site:** [Add live link here]
- **Admin Credentials:** _(Provided in submission)_

---

## 🧠 Core Concepts

- ✅ No public pages — authentication is required everywhere
- ✅ Role-based access control (Admin & User)
- ✅ Server-side route protection
- ✅ Clean, scalable architecture
- ✅ Production-ready UI/UX and error handling

---

## 👥 User Roles

### 👤 Normal User

- Browse and search books
- Maintain a personal reading library
- Track reading progress
- Write reviews and rate books
- Receive personalized recommendations
- Watch curated book-related tutorials

### 🛠️ Admin

- Manage users and roles
- Full CRUD operations for books and genres
- Upload and manage book cover images
- Moderate user reviews
- Manage tutorial (YouTube) content
- View platform statistics from the admin dashboard

---

## ✨ Features

### 🔐 Authentication & Authorization

- Server-side authentication
- Fully protected routes (no public access)
- Role-based route guarding
- Automatic redirection after login:
  - **User** → My Library
  - **Admin** → Admin Dashboard

### 📖 Book Management

- Add, edit, delete books
- Assign books to genres
- Upload and store book cover images
- View books with search, filters, and sorting

### 🏷️ Genre Management

- Create and edit genres
- All books are linked to a genre
- Genre-based filtering and recommendations

### ⭐ Review System

- Users submit reviews with ratings (1–5 stars)
- Reviews remain pending until admin approval
- Only approved reviews are visible publicly

### 📚 Reading Tracker

- **Three personal shelves:**
  - Want to Read
  - Currently Reading (with progress tracking)
  - Read
- Track progress by percentage or pages read

### 🤖 Personalized Recommendations

- Recommendations are generated using:
  - Most read genres
  - User rating behavior
  - Community-approved high-rated books
  - Fallback logic for new users
- Optional explanation tooltips show why a book was recommended

### 🎥 Tutorials

- Protected tutorials page
- Embedded YouTube videos
- Managed by admin
- Accessible to both Admin and Users

### 🎨 UI & UX

- Fully responsive (mobile, tablet, desktop)
- Book-themed, cozy library-style design
- Loading spinners and skeletons
- Clear error handling and empty states
- Clean, accessible layout

---

## ⚙️ Tech Stack

### Frontend

- **Next.js** (App Router)
- **React**
- **Tailwind CSS** / UI library
- **Chart.js** / **Recharts** (for stats & dashboards)

### Backend

- **Node.js**
- **Express** / API Routes
- **Database** (MongoDB or equivalent)
- Server-side authentication

### Other

- Image upload & optimization
- Role-based middleware
- Live deployment (Vercel recommended)

---

## 🧪 Route Protection Rules

| Rule                                  | Status |
| ------------------------------------- | ------ |
| No public homepage                    | ❌     |
| No public book browsing               | ❌     |
| No public book details                | ❌     |
| No public tutorials                   | ❌     |
| **Login is mandatory for all routes** | ✅     |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/bookworm.git
cd book-worm
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file and add:

```env
DATABASE_URL=
AUTH_SECRET=
IMAGE_UPLOAD_KEY=
NEXT_PUBLIC_BASE_URL=
```

### 4️⃣ Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment

- Deployed on **Vercel**
- Fully functional authentication in production
- No console or runtime errors

---

## 🎯 Evaluation Focus

This project emphasizes:

- ✅ Secure authentication
- ✅ Role-based system design
- ✅ Clean CRUD workflows
- ✅ Admin moderation patterns
- ✅ Personalized business logic
- ✅ Production-ready deployment

---

## 📌 Submission Includes

- Live application link
- Client & server repositories
- Admin credentials
- Optional user credentials

---

## 👨‍💻 Author

**Sojib**  
Web Developer | JavaScript | React | Next.js

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

Built with passion for books and clean code ❤️
