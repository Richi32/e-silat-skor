const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllAtlit = (callback) => {
    const sql = 'SELECT * FROM atlit';
    db.query(sql, callback);
};

// Mendapatkan data user berdasrkan id
const getAtlitById = (id, callback) => {
    const sql = 'SELECT * FROM atlit WHERE id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createAtlit = (nama, kontingen, kelas, kategori, jk, callback) => {
    const sql = 'INSERT INTO atlit (nama, kontingen, kelas, kategori, jk) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nama, kontingen, kelas, kategori, jk], callback);
};

// Memperbarui data user berdasarkan id
const updateAtlit = (id, nama, kontingen, kelas, kategori, jk, callback) => {
    const sql = 'UPDATE atlit SET nama = ?, kontingen = ?, kelas = ?, kategori = ?, jk = ? WHERE id = ?';
    db.query(sql, [nama, kontingen, kelas, kategori, jk, id], callback);
};

// Menghapus data user berdasarkan id
const deleteAtlit = (id, callback) => {
    const sql = 'DELETE FROM atlit WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllAtlit,
    getAtlitById,
    createAtlit,
    updateAtlit,
    deleteAtlit,
};
