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

// Mendapatkan data user berdasarkan username dan password
const getUserByUsernameAndPassword = (username, password, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            callback(null, user);
        } else {
            callback(null, null);
        }
    });
};

// Mendapatkan data user berdasarkan token
const getUserByToken = (token, callback) => {
    const sql = 'SELECT * FROM users WHERE token = ?';
    db.query(sql, [token], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            callback(null, user);
        } else {
            callback(null, null);
        }
    });
};

// Memperbarui token pengguna
const updateToken = (userId, token, callback) => {
    const sql = 'UPDATE users SET token = ? WHERE id = ?';
    db.query(sql, [token, userId], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }

        callback(null, result);
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByUsernameAndPassword,
    getUserByToken,
    updateToken
};
