const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllUsers = (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
};

// Mendapatkan data user berdasarkan id
const getUserById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createUser = (username, nama, password, role, callback) => {
    const sql = 'INSERT INTO users (username, nama, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, nama, password, role], callback);
};

// Memperbarui data user berdasarkan id
const updateUser = (id, username, nama, password, role, callback) => {
    const sql = 'UPDATE users SET username = ?, nama = ?, password = ?, role = ? WHERE id = ?';
    db.query(sql, [username, nama, password, role, id], callback);
};

// Menghapus data user berdasarkan id
const deleteUser = (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
