const atlitModel = require('../models/atlitModel');

// Handler untuk GET /users
const getAtlit = (req, res) => {
    atlitModel.getAllAtlit((err, atlit) => {
        if (err) {
            throw err;
        }
        res.status(200).json(atlit);
    });
};

// Handler untuk GET /users/:id
const getAtlitById = (req, res) => {
    const { id } = req.params;
    atlitModel.getAtlitById(id, (err, atlit) => {
        if (err) {
            throw err;
        }
        if (atlit) {
            res.status(200).json(atlit);
        } else {
            res.status(404).json({ message: 'Data atlit tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createAtlit = (req, res) => {
    const { nama, kontingen, kelas, kategori, jk, tim_id } = req.body;
    atlitModel.createAtlit(nama, kontingen, kelas, kategori, jk, tim_id, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data atlit berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updateAtlit = (req, res) => {
    const { id } = req.params;
    const { nama, kontingen, kelas, kategori, jk, tim_id } = req.body;
    atlitModel.updateAtlit(id, nama, kontingen, kelas, kategori, jk, tim_id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data atlit berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data atlit tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deleteAtlit = (req, res) => {
    const { id } = req.params;
    atlitModel.deleteAtlit(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data atlit berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data atlit tidak ditemukan' });
        }
    });
};

module.exports = {
    getAtlit,
    getAtlitById,
    createAtlit,
    updateAtlit,
    deleteAtlit,
};
