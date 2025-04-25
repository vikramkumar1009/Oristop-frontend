
# Oristop Frontend

Welcome to the **Oristop Frontend**, a modern and responsive web interface for the Oristop platform. This project is built using **React**, **Vite**, and **Tailwind CSS**, with integrated **JWT authentication** and **Axios API services**.

This frontend is designed to interact with the [[Oristop backend API](https://github.com/vikramkumar1009/Oristop-backend](https://github.com/vikramkumar1009/OritsoTaskApp)) for user authentication and task management.

---

## 🚀 Tech Stack

- **React** – Component-based UI library  
- **Vite** – Fast build tool and dev server  
- **Tailwind CSS** – Utility-first CSS framework  
- **Axios** – HTTP client for API communication  
- **React Router DOM** – Routing and navigation  
- **JWT Auth** – Authentication via JSON Web Tokens  

---

## 📁 Project Structure

```
oristo/
├── public/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components (Header, Sidebar, TaskList, etc.)
│   ├── pages/               # Pages (Login, Signup, Dashboard)
│   ├── services/            # Axios API service and auth interceptor
│   ├── App.jsx              # Main app layout and routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind CSS entry
├── .env                     # Environment variables
├── index.html
├── package.json
└── vite.config.js
```

---

## 🌐 Live Demo

> (Add link here if hosted, e.g., Vercel or Netlify)

---

## ⚙️ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/vikramkumar1009/Oristop-frontend.git
cd Oristop-frontend/oristo
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file at the root and add:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Make sure the backend server is running and matches this base URL.

4. **Run the Application**

```bash
npm run dev
```

Visit the app at `http://localhost:5173`

---

## 🔐 Authentication Flow

- Signup & Login pages allow users to create and access accounts  
- JWT tokens are returned from the backend and stored in `localStorage`  
- Axios interceptors attach the token to every authenticated API request  
- Protected routes require login to access  

---

## 📂 Core Features

- ✅ User Signup with profile image upload  
- ✅ Login with JWT authentication  
- ✅ Dashboard with authenticated task management  
- ✅ Add, view, and delete tasks (CRUD)  
- ✅ Responsive layout for mobile & desktop  
- ✅ Modular components (Header, Sidebar, Form, etc.)  

---

## 📦 Scripts

- `npm run dev` – Start development server  
- `npm run build` – Build for production  
- `npm run preview` – Preview production build locally  

---

## 🧑‍💻 Author

**Vikram Kumar**  
- [GitHub](https://github.com/vikramkumar1009)  
- [LinkedIn](https://www.linkedin.com/in/vikramkumar1009)  

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📌 To Do

- [ ] Edit & update tasks  
- [ ] User profile page  


---


