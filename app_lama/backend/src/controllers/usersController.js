const userModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Handler untuk GET /users/secret
const getSecretInfo = (req, res) => {
    const secretData = ['Rahasia 1', 'Rahasia 2', 'Rahasia 3'];
    res.status(200).json({
        message: 'Informasi rahasia: Ini adalah data rahasia yang hanya dapat diakses oleh pengguna yang telah login.',
        data: secretData
    });
    console.log("sasasa")
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
const createUser = async (req, res) => {
    const { username, nama, password, role } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        const createdUser = await userModel.createUser(username, nama, hashPassword, role);
        res.status(201).json({ message: 'User berhasil dibuat', user: createdUser });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat membuat user' });
    }
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
    userModel.getUserByUsername(username, (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Terjadi kesalahan saat login1' });
        }
        bcrypt.compare(password, user[0].password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({
                    message: 'Terjadi kesalahan saat login2',
                    data: user[0].password
                });
            }

            if (isMatch) {
                // Membuat token menggunakan JWT
                const token = jwt.sign({ userId: user[0].id }, 'secretkey');

                // Menyimpan token pada pengguna di dalam database
                userModel.updateToken(user[0].id, token, (err) => {
                    if (err) {
                        return res.status(500).json({ message: 'Terjadi kesalahan saat login1' });
                    }

                    // Menyimpan status login dan role dalam objek "user" pada objek request
                    req.user = {
                        isLoggedIn: true,
                        role: user[0].role,
                        token: token
                    };

                    res.status(200).json({
                        message: 'Login berhasil',
                        user: {
                            id: user[0].id,
                            username: user[0].username,
                            nama: user[0].nama,
                            role: user[0].role
                        }
                    });
                });
            } else {
                res.status(401).json({ message: 'Username atau password salah' });
            }

        });
    });
};

// Handler untuk POST /users/logout
const logout = (req, res) => {
    if (req.user && req.user.isLoggedIn) {
        const userId = req.user.userId;
        userModel.updateToken(userId, null, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Terjadi kesalahan saat logout' });
            }

            // Membersihkan informasi pengguna yang terkait dengan logout
            req.user = null;

            res.status(200).json({ message: 'Logout berhasil' });
        });
    } else {
        res.status(401).json({ message: 'Anda belum login' });
    }
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
