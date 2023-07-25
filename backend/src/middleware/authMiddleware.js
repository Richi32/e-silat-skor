const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel');

// Middleware untuk melakukan pengecekan autentikasi
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token tidak valid' });
            }
            req.user = {
                isLoggedIn: true,
                userId: decoded.userId
            };
            next();
        });
    } else {
        return res.status(401).json({ 
            message: 'Token tidak ditemukan'
        });
    }
};

// Middleware untuk melakukan validasi token
const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token tidak valid' });
            }

            // Periksa apakah pengguna masih aktif di database
            userModel.getUserById(decoded.userId, (err, user) => {
                if (err) {
                    return res.status(500).json({ message: 'Terjadi kesalahan saat validasi token' });
                }

                if (!user[0] || !user[0].token || user[0].token !== token) {
                    return res.status(401).json({ 
                        message: 'Token tidak valid'
                     });
                }

                req.user = {
                    isLoggedIn: true,
                    userId: decoded.userId
                };

                next();
            });
        });
    } else {
        return res.status(401).json({ message: 'Token tidak ditemukan' });
    }
};

module.exports = {
    checkAuth,
    validateToken
};
