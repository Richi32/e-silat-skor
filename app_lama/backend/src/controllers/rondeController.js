const rondeModel = require('../models/rondeModel');

// Handler untuk GET /users
const getRonde = (req, res) => {
    rondeModel.getAllRonde((err, ronde) => {
        if (err) {
            throw err;
        }
        res.status(200).json(ronde);
    });
};

// Handler untuk GET /users/:id
const getRondeById = (req, res) => {
    const { id } = req.params;
    rondeModel.getRondeById(id, (err, ronde) => {
        if (err) {
            throw err;
        }
        if (ronde) {
            res.status(200).json(ronde);
        } else {
            res.status(404).json({ message: 'Data ronde tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createRonde = (req, res) => {
    const { partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu } = req.body;
    rondeModel.createRonde(partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data ronde berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updateRonde = (req, res) => {
    const { id } = req.params;
    const { partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu } = req.body;
    rondeModel.updateRonde(id, partai_id, arena_id, ronde, status_ronde, waktu_pertandingan, sisa_waktu, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data ronde berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data ronde tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deleteRonde = (req, res) => {
    const { id } = req.params;
    rondeModel.deleteRonde(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data ronde berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data ronde tidak ditemukan' });
        }
    });
};

module.exports = {
    getRonde,
    getRondeById,
    createRonde,
    updateRonde,
    deleteRonde,
};
