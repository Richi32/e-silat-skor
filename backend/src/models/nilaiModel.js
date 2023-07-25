const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllNilai = (callback) => {
    const sql = 'SELECT * FROM nilai';
    db.query(sql, callback);
};

// Mendapatkan data user berdasrkan id
const getNilaiById = (id, callback) => {
    const sql = 'SELECT * FROM nilai WHERE id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createNilai = (jenis, nilai, callback) => {
    const sql = 'INSERT INTO nilai (jenis, nilai) VALUES (?, ?)';
    db.query(sql, [jenis, nilai], callback);
};

// Memperbarui data user berdasarkan id
const updateNilai = (id, jenis, nilai, callback) => {
    const sql = 'UPDATE nilai SET jenis = ?, nilai = ? WHERE id = ?';
    db.query(sql, [jenis, nilai, id], callback);
};

// Menghapus data user berdasarkan ids
const deleteNilai = (id, callback) => {
    const sql = 'DELETE FROM nilai WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllNilai,
    getNilaiById,
    createNilai,
    updateNilai,
    deleteNilai,
};
