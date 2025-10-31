import React, { useState, useEffect } from "react";
import PostForm from "../components/PostForm";

const CreatePostPage = () => {
  const [userId, setUserId] = useState("");

  //  pega o ID salvo automaticamente
  useEffect(() => {
    const savedId = localStorage.getItem("userId");
    if (savedId) setUserId(savedId);
  }, []);

  return (
    <div className="page">
      <h1>📝 Criar novo post</h1>

      {!userId ? (
        <p>⚠️ Nenhum usuário encontrado! Cadastre-se antes de postar.</p>
      ) : (
        <>
          <p style={{ color: "gray", fontSize: "0.9em" }}>
            ID atual: <code>{userId}</code>
          </p>
          <PostForm authorId={userId} onPostCreated={() => {}} />
        </>
      )}
    </div>
  );
};

export default CreatePostPage;
