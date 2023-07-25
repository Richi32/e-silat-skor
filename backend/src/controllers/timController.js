const timModel = require('../models/timModel');

// Handler untuk GET /users
const getTim = (req, res) => {
    timModel.getAllTim((err, tim) => {
        if (err) {
            throw err;
        }
        res.status(200).json(tim);
    });
};

// Handler untuk GET /users/:id
const getTimById = (req, res) => {
    const { id } = req.params;
    timModel.getTimById(id, (err, tim) => {
        if (err) {
            throw err;
        }
        if (tim) {
            res.status(200).json(tim);
        } else {
            res.status(404).json({ message: 'Data tim tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createTim = (req, res) => {
    const { tim } = req.body;
    timModel.createTim(tim, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data tim berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updateTim = (req, res) => {
    const { id } = req.params;
    const { tim } = req.body;
    timModel.updateTim(id, tim, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data tim berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data tim tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deleteTim = (req, res) => {
    const { id } = req.params;
    timModel.deleteTim(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data tim berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data tim tidak ditemukan' });
        }
    });
};

module.exports = {
    getTim,
    getTimById,
    createTim,
    updateTim,
    deleteTim,
};
