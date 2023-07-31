const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllRonde = (callback) => {
    const sql = 'SELECT ronde.*,partai.partai,partai.pertandingan,partai.tgl_pelaksanaan,atlit_biru.nama AS nama_atlit_biru,atlit_merah.nama AS nama_atlit_merah FROM ronde JOIN partai ON partai.id=ronde.partai_id JOIN arena ON arena.id=ronde.arena_id JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id';
    db.query(sql, callback);
};

// Mendapatkan data user berdasrkan id
const getRondeById = (id, callback) => {
    const sql = 'SELECT * FROM ronde WHERE id = ?';
    db.query(sql, [id], callback);
};

// Menyimpan data user baru
const createRonde = (partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu, callback) => {
    const sql = 'INSERT INTO ronde (partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu], callback);
};

// Memperbarui data user berdasarkan id
const updateRonde = (id, partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu, callback) => {
    const sql = 'UPDATE ronde SET partai_id = ?, arena_id = ?, ronde = ?, status_ronde = ?, waktu_pertandingan = ?, sisa_waktu = ? WHERE id = ?';
    db.query(sql, [partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu, id], callback);
};

// Menghapus data user berdasarkan ids
const deleteRonde = (id, callback) => {
    const sql = 'DELETE FROM ronde WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllRonde,
    getRondeById,
    createRonde,
    updateRonde,
    deleteRonde,
};
