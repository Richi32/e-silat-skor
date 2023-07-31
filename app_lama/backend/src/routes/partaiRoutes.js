const express = require('express');
const router = express.Router();
const partaiController = require('../controllers/partaiController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, partaiController.getPartai);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, partaiController.getPartaiById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, partaiController.createPartai);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, partaiController.updatePartai);
router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, partaiController.deletePartai);

module.exports = router;