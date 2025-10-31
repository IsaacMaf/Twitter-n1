import express from "express";
import cors from "cors";

import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/posts.routes.js";
import commentRoutes from "./routes/comments.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// middlewares
app.use(logger);
app.use(errorHandler);

// rotas principais
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// rota inicial
app.get("/", (req, res) => {
  res.send('Servidor do "Twitter" rodando');
});

export default app;
