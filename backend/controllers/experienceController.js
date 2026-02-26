const pool = require('../config/db');

exports.getExperience = async (req, res) => {
    try {
        // Fetch experience rows then aggregate bullets in JS
        const expResult = await pool.query(
            'SELECT * FROM experience ORDER BY sort_order ASC'
        );
        const bulletResult = await pool.query(
            'SELECT * FROM experience_bullets ORDER BY experience_id ASC, sort_order ASC'
        );

        // Group bullets by experience_id
        const bulletsMap = {};
        for (const b of bulletResult.rows) {
            if (!bulletsMap[b.experience_id]) bulletsMap[b.experience_id] = [];
            bulletsMap[b.experience_id].push(b.bullet);
        }

        const experiences = expResult.rows.map((exp) => ({
            ...exp,
            bullets: bulletsMap[exp.id] || [],
        }));

        res.json(experiences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
};
