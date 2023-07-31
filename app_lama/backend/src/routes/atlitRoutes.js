const express = require('express');
const router = express.Router();
const atlitController = require('../controllers/atlitController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, atlitController.getAtlit);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, atlitController.getAtlitById);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, atlitController.createAtlit);
router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, atlitController.updateAtlit);
router.delete('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, atlitController.deleteAtlit);

module.exports = router;