const partaiModel = require('../models/partaiModel');

// Handler untuk GET /users
const getPartai = (req, res) => {
    partaiModel.getAllPartai((err, partai) => {
        if (err) {
            throw err;
        }
        res.status(200).json(partai);
    });
};

// Handler untuk GET /users/:id
const getPartaiById = (req, res) => {
    const { id } = req.params;
    partaiModel.getPartaiById(id, (err, partai) => {
        if (err) {
            throw err;
        }
        if (partai) {
            res.status(200).json(partai);
        } else {
            res.status(404).json({ message: 'Data partai tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createPartai = (req, res) => {
    const { partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan } = req.body;
    partaiModel.createPartai(partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data partai berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updatePartai = (req, res) => {
    const { id } = req.params;
    const { partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan } = req.body;
    partaiModel.updatePartai(id, partai, tim_merah_id, tim_biru_id, pertandingan, tgl_pelaksanaan, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data partai berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data partai tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deletePartai = (req, res) => {
    const { id } = req.params;
    partaiModel.deletePartai(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data partai berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data partai tidak ditemukan' });
        }
    });
};

module.exports = {
    getPartai,
    getPartaiById,
    createPartai,
    updatePartai,
    deletePartai,
};
