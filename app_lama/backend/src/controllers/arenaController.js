const arenaModel = require('../models/arenaModel');

// Handler untuk GET /users
const getArena = (req, res) => {
    arenaModel.getAllArena((err, arena) => {
        if (err) {
            throw err;
        }
        res.status(200).json(arena);
    });
};

// Handler untuk GET /users/:id
const getArenaById = (req, res) => {
    const { id } = req.params;
    arenaModel.getArenaById(id, (err, arena) => {
        if (err) {
            throw err;
        }
        if (arena) {
            res.status(200).json(arena);
        } else {
            res.status(404).json({ message: 'Data arena tidak ditemukan' });
        }
    });
};

// Handler untuk POST /users
const createArena = (req, res) => {
    const { arena } = req.body;
    arenaModel.createArena(arena, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data arena berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
const updateArena = (req, res) => {
    const { id } = req.params;
    const { arena } = req.body;
    arenaModel.updateArena(id, arena, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data arena berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Data arena tidak ditemukan' });
        }
    });
};

// Handler untuk DELETE /users/:id
const deleteArena = (req, res) => {
    const { id } = req.params;
    arenaModel.deleteArena(id, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Data arena berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data arena tidak ditemukan' });
        }
    });
};

module.exports = {
    getArena,
    getArenaById,
    createArena,
    updateArena,
    deleteArena,
};
