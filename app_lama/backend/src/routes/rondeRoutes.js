const express = require('express');
const router = express.Router();
const rondeController = require('../controllers/rondeController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, rondeController.getRonde);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, rondeController.getRondeById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, rondeController.createRonde);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, rondeController.updateRonde);
router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, rondeController.deleteRonde);

module.exports = router;