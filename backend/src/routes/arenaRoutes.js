const express = require('express');
const router = express.Router();
const arenaController = require('../controllers/arenaController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, arenaController.getArena);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, arenaController.getArenaById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, arenaController.createArena);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, arenaController.updateArena);
router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, arenaController.deleteArena);

module.exports = router;
