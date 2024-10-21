const router = require('express').Router();
const { UserController } = require('../controllers');
const { AuthMiddleware } = require('../middlewares');
const { RouteConstants } = require('../../../constants');

//Sample Code
router.get('/api', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });


 