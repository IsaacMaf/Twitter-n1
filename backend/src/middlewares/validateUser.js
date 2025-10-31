export const validateUser = (req, res, next) => {
  const { name, username, bio } = req.body;
  if (!name || !username || !bio) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }
  next();
};
