const express = require('express');
const cors = require('cors');

import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/posts.routes');
const commentRoutes = require('./routes/comments.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);
app.use(errorHandler);

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
  res.send('Servidor do "Twitter" rodando ');
});

module.exports = app;
