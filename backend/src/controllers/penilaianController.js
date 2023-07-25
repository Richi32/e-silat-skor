const penilaianModel = require('../models/penilaianModel');

// Handler untuk GET /users
const getPenilaian = (req, res) => {
    penilaianModel.getAllPenilaian((err, nilai) => {
        if (err) {
            throw err;
        }
        res.status(200).json(nilai);
    });
};

// Handler untuk GET /users/:id
const getPenilaianById = (req, res) => {
    const { id } = req.params;
    penilaianModel.getPenilaianById(id, (err, nilai) => {
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

const getPenilaianByAtlitId = (req, res) => {
    const { id } = req.params;
    penilaianModel.getPenilaianByAtlitId(id, (err, nilai) => {
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

const getPenilaianByRondeId = (req, res) => {
    const { atlit_id, ronde_id } = req.params;
    console.log(atlit_id, ronde_id)
    penilaianModel.getPenilaianByRondeId(atlit_id, ronde_id, (err, nilai) => {
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
const createPenilaian = (req, res) => {
    const { ronde_id, users_id, atlit_id, nilai_id } = req.body;
    penilaianModel.createPenilaian(ronde_id, users_id, atlit_id, nilai_id, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: 'Data nilai berhasil disimpan' });
    });
};

// Handler untuk PUT /users/:id
// const updatePenilaian = (req, res) => {
//     const { id } = req.params;
//     const { ronde_id, users_id, atlit_id, nilai_id } = req.body;
//     penilaianModel.updatePenilaian(id, ronde_id, users_id, atlit_id, nilai_id, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         if (result.affectedRows > 0) {
//             res.status(200).json({ message: 'Data nilai berhasil diperbarui' });
//         } else {
//             res.status(404).json({ message: 'Data nilai tidak ditemukan' });
//         }
//     });
// };

// Handler untuk DELETE /users/:id
const deletePenilaian = (req, res) => {
    const { users_id, atlit_id } = req.params;
    penilaianModel.deletePenilaian(users_id, atlit_id, (err, result) => {
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
    getPenilaian,
    getPenilaianById,
    getPenilaianByAtlitId,
    getPenilaianByRondeId,
    createPenilaian,
    // updatePenilaian,
    deletePenilaian,
};
