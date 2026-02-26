const pool = require('../config/db');

exports.getSkills = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM skills ORDER BY sort_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
};
