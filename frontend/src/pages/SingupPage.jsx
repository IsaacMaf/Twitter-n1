import React, { useState } from "react";
import api from "../services/api";

const SingupPage = () => {
  const [form, setForm] = useState({ name: "", username: "", bio: "" });
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/users", form);
      const newUserId = res.data._id;

      //  guarda o ID no navegador
      localStorage.setItem("userId", newUserId);
      setUserId(newUserId);

      setMessage(`Usuário criado: ${res.data.username} (ID salvo localmente!)`);
      setForm({ name: "", username: "", bio: "" });
    } catch (error) {
        console.error(error.response?.data || error.message);
        setMessage("Erro: " + (error.response?.data?.message || "Não foi possível criar usuário."));
    }
  };

  return (
    <div className="page">
      <h1>👤 Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          name="username"
          placeholder="Usuário"
          onChange={handleChange}
          value={form.username}
          required
        />
        <textarea
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
          value={form.bio}
        ></textarea>
        <button type="submit">Cadastrar</button>
      </form>

      {message && <p>{message}</p>}

      {userId && (
        <p style={{ marginTop: "10px", fontSize: "0.9em", color: "gray" }}>
           ID salvo localmente, seu ID: <code>{userId}</code>
        </p>
      )}
    </div>
  );
};

export default SingupPage;
