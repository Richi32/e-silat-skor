const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllTim = (callback) => {
    const sql = 'SELECT * FROM tim';
    db.query(sql, callback);
};

// Mendapatkan data user berdasrkan id
const getTimById = (id, callback) => {
    const sql = 'SELECT * FROM tim WHERE id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createTim = (tim, callback) => {
    const sql = 'INSERT INTO tim (tim) VALUES (?)';
    db.query(sql, [tim], callback);
};

// Memperbarui data user berdasarkan id
const updateTim = (id, tim, callback) => {
    const sql = 'UPDATE tim SET tim = ? WHERE id = ?';
    db.query(sql, [tim, id], callback);
};

// Menghapus data user berdasarkan id
const deleteTim = (id, callback) => {
    const sql = 'DELETE FROM tim WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllTim,
    getTimById,
    createTim,
    updateTim,
    deleteTim,
};
