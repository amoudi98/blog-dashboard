# 📝 Blog Dashboard

A blog dashboard built with **Next.js**, **Material UI**, **TypeScript**, and **RTK Query**. Users can view a paginated list of blog posts, read details of a post, and add new posts through a form.

🚀 [Live Demo on Vercel](https://blog-dashboard-j6ay.vercel.app/)

---

## 📦 Tech Stack

- **Next.js 15**
- **React 18**
- **Material UI (MUI)**
- **Redux Toolkit & RTK Query**
- **TypeScript**

---

## 📌 Features

- View paginated blog posts (6 per page)
- Add a new post with title, author, and content
- Read full content of a single post
- Responsive and modern UI

---

## 💻 Instructions to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/blog-dashboard.git
   cd blog-dashboard
2. npm install
3. npm run dev
4. Open http://localhost:3000 in your browser to view the app.

## Design Decisions & Challenges
RTK Query for Data Fetching:
Chosen for its simplicity in managing API calls and cache updates. One challenge was ensuring the post list updates immediately after adding a new post without refetching outdated pagination metadata.

Pagination Management:
Implemented pagination manually based on mock API response. A challenge was ensuring the post count per page stays consistent when new posts are added.

Material UI for Styling:
Selected for rapid prototyping and responsiveness. One challenge was customizing components (e.g., Card hover animations) while preserving Material's design language.

Mock API Limitations:
Since a real backend isn’t used, data doesn’t persist on page refresh. This required careful handling of cache updates to simulate real-world behavior as closely as possible.
