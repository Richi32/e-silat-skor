const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllPartai = (callback) => {
    const sql = 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_merah.nama AS nama_atlit_merah FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id';
    db.query(sql, callback);
};

// Mendapatkan data user berdasrkan id
const getPartaiById = (id, callback) => {
    const sql = 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_merah.nama AS nama_atlit_merah FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id WHERE partai.id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createPartai = (partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan, callback) => {
    const sql = 'INSERT INTO partai (partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan], callback);
};

// Memperbarui data user berdasarkan id
const updatePartai = (id, partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan, callback) => {
    const sql = 'UPDATE partai SET partai = ?, tim_merah_id = ?, tim_biru_id = ?, pertandingan = ?, tgl_pelaksanaan = ? WHERE id = ?';
    db.query(sql, [partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan, id], callback);
};

// Menghapus data user berdasarkan ids
const deletePartai = (id, callback) => {
    const sql = 'DELETE FROM partai WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllPartai,
    getPartaiById,
    createPartai,
    updatePartai,
    deletePartai,
};
