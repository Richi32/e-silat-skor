const express = require('express');
const router = express.Router();
const timController = require('../controllers/timController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, timController.getTim);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, timController.getTimById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, timController.createTim);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, timController.updateTim);
// router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, timController.deleteTim);

module.exports = router;