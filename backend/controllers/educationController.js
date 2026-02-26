const pool = require('../config/db');

exports.getEducation = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM education ORDER BY sort_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
};
