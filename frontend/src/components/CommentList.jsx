import React, { useEffect, useState } from "react";
import api from "../services/api";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Buscar comentários do post
  useEffect(() => {
    if (!postId) return;
    api
      .get(`/comments/${postId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Erro ao carregar comentários:", err));
  }, [postId]);

  // Criar novo comentário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authorId || !text) return alert("Preencha todos os campos!");

    setLoading(true);
    try {
      const res = await api.post("/comments", { postId, authorId, text });
      setComments([res.data, ...comments]); // adiciona o novo comentário na lista
      setText("");
    } catch (err) {
      console.error("Erro ao enviar comentário:", err);
      alert("Erro ao enviar comentário!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "30px",
        color: "#e4c4ffff",
        boxShadow: "0 0 10px rgba(218, 167, 255, 0.2)",
      }}
    >
      <h3 style={{ color: "#4800ffff" }}>💬 Comentários</h3>

      <form onSubmit={handleSubmit} style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Seu ID de usuário"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #333",
            backgroundColor: "#1b1b1b",
            color: "#e4c4ffff",
          }}
        />
        <textarea
          placeholder="Escreva seu comentário..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="3"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #333",
            backgroundColor: "#1b1b1b",
            color: "#ceadffff",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            backgroundColor: loading ? "#444" : "#4800ffff",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "default" : "pointer",
            transition: "0.3s",
          }}
        >
          {loading ? "Enviando..." : "Comentar"}
        </button>
      </form>

      <div>
        {comments.length === 0 ? (
          <p>Nenhum comentário ainda. Seja o primeiro!</p>
        ) : (
          comments.map((c) => (
            <div
              key={c._id}
              style={{
                backgroundColor: "#1a1a1a",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              <strong style={{ color: "#4800ffff" }}>
                @{c.author?.username || "Anônimo"}:
              </strong>
              <p style={{ margin: "5px 0" }}>{c.text}</p>
              <small style={{ color: "#888" }}>
                {new Date(c.createdAt).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentList;
