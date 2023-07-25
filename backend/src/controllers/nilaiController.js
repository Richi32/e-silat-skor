const nilaiModel = require('../models/nilaiModel');

// Handler untuk GET /users
const getNilai = (req, res) => {
    nilaiModel.getAllNilai((err, nilai) => {
        if (err) {
            throw err;
        }
        res.status(200).json(nilai);
    });
};

// Handler untuk GET /users/:id
const getNilaiById = (req, res) => {
    const { id } = req.params;
    nilaiModel.getNilaiById(id, (err, nilai) => {
        if (err) {
            throw err;
        }
        if (nilai) {
            res.status(200).json(nilai);
        } else {
            res.status(404).json({ message: 'Data nilai tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createNilai = (req, res) => {
    const { jenis, nilai } = req.body;
    nilaiModel.createNilai(jenis, nilai, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data nilai berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updateNilai = (req, res) => {
    const { id } = req.params;
    const { jenis, nilai } = req.body;
    nilaiModel.updateNilai(id, jenis, nilai, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data nilai berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data nilai tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deleteNilai = (req, res) => {
    const { id } = req.params;
    nilaiModel.deleteNilai(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data nilai berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data nilai tidak ditemukan' });
        }
    });
};

module.exports = {
    getNilai,
    getNilaiById,
    createNilai,
    updateNilai,
    deleteNilai,
};
