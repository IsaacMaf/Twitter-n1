const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
  try {
    const { authorId, content } = req.body;

    if (!authorId || !content)
      return res.status(400).json({ message: 'Autor e conteúdo são obrigatórios' });

    const user = await User.findById(authorId);
    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    const post = await Post.create({ author: authorId, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar post', error: err.message });
  }
};

exports.listPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name username')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar posts', error: err.message });
  }
};
