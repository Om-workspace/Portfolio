require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('./config/db');

async function init() {
    const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
    try {
        await pool.query(sql);
        console.log('✅ Database initialised successfully.');
    } catch (err) {
        console.error('❌ DB init failed:', err.message);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

init();
