#  Twitter N1 — Frontend

Frontend do projeto **Twitter N1**, uma interface inspirada no Twitter feita com **React + Vite**, que consome a API do backend.

## 🚀 Tecnologias

- React + Vite
- React Router DOM
- Axios
- CSS (estilização customizada com tons de verde e preto)

## ⚙️ Estrutura de Pastas
```bash
frontend/
├── public/
├── src/
│ ├── components/ # Componentes reutilizáveis
│ ├── pages/ # Páginas principais
│ ├── services/ # Configuração do Axios
│ ├── App.jsx # Rotas principais
│ ├── main.jsx # Ponto de entrada do React
│ └── styles.css # Estilo global
└── vite.config.js
```

## 📄 Páginas

- `/` → Lista de posts  
- `/signup` → Cadastro de novo usuário  
- `/new` → Criação de um novo post  
- `/post/:id` → Página individual do post  



# (parte do react)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
