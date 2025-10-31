const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, username, bio } = req.body;

    if (!name || !username)
      return res.status(400).json({ message: 'Nome e username são obrigatórios' });

    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ message: 'Username já existe' });

    const newUser = await User.create({ name, username, bio });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error: err.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar usuários', error: err.message });
  }
};
