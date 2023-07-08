const userModel = require('../models/usersModel');

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

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
