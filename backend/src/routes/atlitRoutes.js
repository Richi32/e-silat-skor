const express = require('express');
const router = express.Router();
const atlitController = require('../controllers/atlitController');

// Menggunakan controller untuk menghandle request ke /users
router.get('/', atlitController.getAtlit);
router.get('/:id', atlitController.getAtlitById);
router.post('/', atlitController.createAtlit);
router.put('/:id', atlitController.updateAtlit);
router.delete('/:id', atlitController.deleteAtlit);

module.exports = router;
