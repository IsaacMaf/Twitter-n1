# Twitter N1 — Backend

Este é o backend do projeto **Twitter N1**, uma aplicação estilo “mini Twitter” desenvolvida com **Node.js**, **Express** e **MongoDB**.

## 🚀 Tecnologias

- Node.js
- Express
- MongoDB Atlas (via Mongoose)
- Dotenv
- Nodemon (para ambiente de desenvolvimento)
- CORS e Body-Parser

## ⚙️ Estrutura de Pastas

backend/
├── src/
│ ├── controllers/ # Lógica das rotas
│ ├── models/ # Modelos do banco de dados (Schemas)
│ ├── routes/ # Definição das rotas
│ ├── middlewares/ # Middlewares de autenticação, logs e validações
│ ├── app.js # Configuração principal do servidor
│ └── index.js # Ponto de entrada
├── .env # Variáveis de ambiente (Mongo URI)
└── config # Conexão com o Banco de Dados

## 🧩 Rotas da API

### 👤 Usuários
- `POST /api/users` → cria um novo usuário  
- `GET /api/users` → lista todos os usuários  

### 📝 Posts
- `POST /api/posts` → cria um novo post  
- `GET /api/posts` → lista todos os posts  

## ⚙️ Middlewares

Os **middlewares** usados neste projeto incluem:

- **CORS** → permite que o frontend (localhost:5173) acesse o backend (localhost:4000)  
- **Body-Parser / Express.json()** → interpreta requisições JSON  
- **Dotenv** → gerencia variáveis de ambiente  
- **Logger** → pode registrar informações de requisições no console  

Todos eles são configurados no arquivo `src/app.js`.
