const express = require('express');
const router = express.Router();
const nilaiController = require('../controllers/nilaiController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, nilaiController.getNilai);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, nilaiController.getNilaiById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, nilaiController.createNilai);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, nilaiController.updateNilai);
router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, nilaiController.deleteNilai);

module.exports = router;