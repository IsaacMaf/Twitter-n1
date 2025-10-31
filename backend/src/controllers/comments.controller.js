import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const createComment = async (req, res) => {
  try {
    const { postId, authorId, text } = req.body;

    if (!postId || !authorId || !text) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    const user = await User.findById(authorId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const comment = await Comment.create({ post: postId, author: authorId, text });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar comentário", error: err.message });
  }
};

export const listCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId }).populate("author", "name username");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar comentários", error: err.message });
  }
};
