# 📚 Book Finder App

A React + Vite application to search books using the **OpenLibrary API**, add/remove them from **Favorites**, and view saved books.  

---

## 🚀 Features- 
- **Search by Title or Author**  
  - Uses the [Open Library API](https://openlibrary.org/dev/docs/api/books).  
  - Handles empty input or unrelated queries → redirects to a **Wrong Input** page.  

- **Top 20 Books**  
  - Displays results in a responsive 3×3 grid layout.  
  - Each book card shows cover, title, author(s), and first publish year.  

- **Favorites System**  
  - Star button on each book card → toggle add/remove favorite.  
  - Favorites saved in `localStorage`.  
  - Accessible from the `/favorites` page.  

- **Routing (React Router v6)**  
  - `/` → Home (search form).  
  - `/20books` → Search results.  
  - `/favorites` → Saved books.  
  - `/wrong` → Wrong input / no results page.  

- **Global Navbar**  
  - Logo + App Name (left).  
  - Profile + Favorites link (right).  
  - Stays consistent across all pages.  

- **Loading Spinner**  
  - Shown during API requests.   

---

## 🛠️ Tech Stack
- **React 18** (with hooks)  
- **Vite** (fast dev + build)  
- **React Router DOM** (for routing)  
- **Tailwind CSS** (styling)  
- **Lucide Icons** (star icons)  

---


## ⚡ Setup & Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-finder.git
   cd book-finder

2. Install dependencies
npm install

3. Run locally
npm run dev



📦 Build for Production
npm run build



🌍 Deployment Notes

This is a frontend-only app (static site). Deployed it on:

[Live Site](https://book-finder-mqef.onrender.com/)

Render (Static Site): Publish dist/ folder.

Build Command → npm run build
Publish Directory → dist



👨‍💻 Author

Built with ❤️ by Aklshat Saxena


---

👉 This README covers **features, stack, structure, run instructions, and deployment notes**.  


