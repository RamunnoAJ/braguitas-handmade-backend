const { Router } = require('express');

const usersRouter = new Router();

usersRouter.get('/', (_, res) => {
  res.send('users');
});

module.exports = usersRouter;
