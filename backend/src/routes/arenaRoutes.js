const express = require('express');
const router = express.Router();
const arenaController = require('../controllers/arenaController');

// Menggunakan controller untuk menghandle request ke /users
router.get('/', arenaController.getArena);
router.get('/:id', arenaController.getArenaById);
router.post('/', arenaController.createArena);
router.put('/:id', arenaController.updateArena);
router.delete('/:id', arenaController.deleteArena);

module.exports = router;
