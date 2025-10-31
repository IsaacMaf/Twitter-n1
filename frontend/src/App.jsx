import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import SingupPage from "./pages/SingupPage";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">🔍 TimeLine 📱</Link>
        <Link to="/signup">📝 Cadastro 📌</Link>
        <Link to="/create">🔥 Novo Post 💡</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
