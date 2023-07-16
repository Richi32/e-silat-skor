const userModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

// Handler untuk GET /users/secret
const getSecretInfo = (req, res) => {
    // Periksa status login dan role pada objek request
    if (req.user.isLoggedIn && req.user.role === 'admin') {
        // Mengirimkan response sukses jika memenuhi persyaratan
        res.status(200).json({ message: 'Ini adalah informasi rahasia!' });
    } else {
        // Mengirimkan response error jika tidak memenuhi persyaratan
        res.status(403).json({ message: 'Akses ditolak' });
    }
};

// Handler untuk GET /users
const getUsers = (req, res) => {
    userModel.getAllUsers((err, users) => {
        if (err) {
            throw err;
        }
        res.status(200).json(users);
    });
};

// Handler untuk GET /users/:id
const getUserById = (req, res) => {
    const { id } = req.params;
    userModel.getUserById(id, (err, user) => {
        if (err) {
            throw err;
        }
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Data user tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createUser = (req, res) => {
    const { username, nama, password, role } = req.body;
    userModel.createUser(username, nama, password, role, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data user berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updateUser = (req, res) => {
    const { id } = req.params;
    const { username, nama, password, role } = req.body;
    userModel.updateUser(id, username, nama, password, role, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data user berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data user tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deleteUser = (req, res) => {
    const { id } = req.params;
    userModel.deleteUser(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data user berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data user tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users/login
const login = (req, res) => {
    const { username, password } = req.body;

    userModel.getUserByUsernameAndPassword(username, password, (err, user) => {
        if (err) {
            throw err;
        }

        if (user) {
            // Membuat token menggunakan JWT
            const token = jwt.sign({ userId: user.id }, 'secretkey');

            // Menyimpan token pada pengguna di dalam database
            userModel.updateToken(user.id, token, (err, result) => {
                if (err) {
                    throw err;
                }

                // Menyimpan status login dan role dalam objek "user" pada objek request
                req.user = {
                    isLoggedIn: true,
                    role: user.role,
                    token: token
                };

                res.status(200).json({
                    message: 'Login berhasil',
                    user: {
                        id: user.id,
                        username: user.username,
                        nama: user.nama,
                        role: user.role
                    }
                });
            });
        } else {
            res.status(401).json({ message: 'Username atau password salah' });
        }
    });
};

// Handler untuk POST /users/logout
const logout = (req, res) => {
    const userId = req.user.id;

    // Menghapus token pengguna dari database
    userModel.updateToken(userId, null, (err, result) => {
        if (err) {
            throw err;
        }

        // Menghapus token dari objek "user" pada objek request
        req.user.token = null;

        // Mengirimkan respons logout berhasil
        res.status(200).json({ message: 'Logout berhasil' });
    });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login,
    logout,
    getSecretInfo
};
