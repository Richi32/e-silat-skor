const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllArena = (callback) => {
    const sql = 'SELECT * FROM arena';
    db.query(sql, callback);
};

// Mendapatkan data user berdasarkan id
const getArenaById = (id, callback) => {
    const sql = 'SELECT * FROM arena WHERE id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createArena = (arena, callback) => {
    const sql = 'INSERT INTO arena (arena) VALUES (?)';
    db.query(sql, [arena], callback);
};

// Memperbarui data user berdasarkan id
const updateArena = (id, arena, callback) => {
    const sql = 'UPDATE arena SET arena = ? WHERE id = ?';
    db.query(sql, [arena, id], callback);
};

// Menghapus data user berdasarkan id
const deleteArena = (id, callback) => {
    const sql = 'DELETE FROM arena WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllArena,
    getArenaById,
    createArena,
    updateArena,
    deleteArena,
};
