const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, usersController.getUsers);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, usersController.getUserById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, usersController.createUser);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, usersController.updateUser);
router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, usersController.deleteUser);

router.post('/login', usersController.login);
router.post('/logout', authMiddleware.checkAuth, usersController.logout);

// router.get('/secret', authMiddleware.checkAuth, usersController.getSecretInfo);

module.exports = router;
