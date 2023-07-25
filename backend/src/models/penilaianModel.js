const db = require('../config/config.db');

// Mendapatkan semua data user
const getAllPenilaian = (callback) => {
    const sql = 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,nilai.nilai,nilai.jenis FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id;';
    db.query(sql, callback);
};

// Mendapatkan data user berdasrkan id
const getPenilaianById = (id, callback) => {
    const sql = 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,nilai.nilai,nilai.jenis FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE penilaian.id = ?';
    db.query(sql, [id], callback);
};

const getPenilaianByAtlitId = (id, callback) => {
    const sql = 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,GROUP_CONCAT(nilai.nilai SEPARATOR " ") AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id = ? GROUP BY atlit.id';
    db.query(sql, [id], callback);
};

const getPenilaianByRondeId = (atlit_id, ronde_id, callback) => {
    const sql = 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,GROUP_CONCAT(nilai.nilai SEPARATOR " ") AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id = ? AND ronde.id = ? GROUP BY atlit.id';
    db.query(sql, [atlit_id, ronde_id], callback);
};

// Menyimpan data user baru
const createPenilaian = (ronde_id, users_id, atlit_id, nilai_id, callback) => {
    const sql = 'INSERT INTO penilaian (ronde_id, users_id, atlit_id, nilai_id) VALUES (?, ?, ?, ?)';
    db.query(sql, [ronde_id, users_id, atlit_id, nilai_id], callback);
};

// Memperbarui data user berdasarkan id
const updatePenilaian = (id, ronde_id, users_id, atlit_id, nilai_id, callback) => {
    const sql = 'UPDATE penilaian SET ronde_id = ?, users_id = ?, atlit_id = ?, nilai_id = ? WHERE id = ?';
    db.query(sql, [ronde_id, users_id, atlit_id, nilai_id, id], callback);
};

// Menghapus data user berdasarkan ids
const deletePenilaian = (users_id, atlit_id, callback) => {
    const sql = 'DELETE FROM penilaian WHERE users_id = ? AND atlit_id = ? AND id=(SELECT id FROM penilaian WHERE users_id = ? AND atlit_id = ? ORDER BY id DESC LIMIT 1);';
    db.query(sql, [users_id, atlit_id, users_id, atlit_id], callback);
};

module.exports = {
    getAllPenilaian,
    getPenilaianById,
    getPenilaianByAtlitId,
    getPenilaianByRondeId,
    createPenilaian,
    updatePenilaian,
    deletePenilaian,
};
