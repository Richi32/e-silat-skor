const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Middleware untuk memeriksa status login dan role
const checkAuth = (req, res, next) => {
    // Periksa apakah pengguna sudah login dan memiliki role yang sesuai
    if (req.user.isLoggedIn && req.user.role === 'admin') {
        // Lanjutkan ke rute selanjutnya
        next();
    } else {
        // Kirim response error jika tidak memenuhi persyaratan
        res.status(403).json({ message: 'Akses ditolak' });
    }
};

// Menggunakan controller untuk menghandle request ke /users
router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

router.post('/login', usersController.login);
router.post('/logout', checkAuth, usersController.logout);

router.get('/secret', checkAuth, usersController.getSecretInfo);

module.exports = router;
