import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const { authorId, content } = req.body;

    if (!authorId || !content)
      return res
        .status(400)
        .json({ message: "Autor e conteúdo são obrigatórios" });

    const user = await User.findById(authorId);
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    const post = await Post.create({ author: authorId, content });
    res.status(201).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao criar post", error: err.message });
  }
};

export const listPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name username")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao listar posts", error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("author", "name username");

    if (!post) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    res.json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao buscar post", error: err.message });
  }
};
