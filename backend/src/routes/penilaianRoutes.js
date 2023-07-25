const express = require('express');
const router = express.Router();
const penilaianController = require('../controllers/penilaianController');

const authMiddleware = require('../middleware/authMiddleware')

// Menggunakan controller untuk menghandle request ke /users
router.get('/', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.getPenilaian);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.getPenilaianById);
router.get('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.getPenilaianByAtlitId);
router.get('/:atlit_id/:ronde_id', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.getPenilaianByRondeId);
router.post('/', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.createPenilaian);
// router.put('/:id', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.updatePenilaian);
router.delete('/:users_id/:atlit_id', authMiddleware.checkAuth, authMiddleware.validateToken, penilaianController.deletePenilaian);

module.exports = router;