import React, { useState } from "react";
import api from "../services/api";

const PostForm = ({ authorId, onPostCreated }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const response = await api.post("/posts", { authorId, content });
    onPostCreated(response.data);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="O que está acontecendo?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Postar</button>
    </form>
  );
};

export default PostForm;
