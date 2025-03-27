var pool = require('./db');
var md5 = require('md5');

async function getUserAndPassword(usuario, password) {
    try {
        var query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1';
        var rows = await pool.query(query, [usuario, md5(password)]); // Usar md5 solo si las contraseñas están en MD5
        return rows[0]; 
    } catch (error) {
        throw error;
    }
}

module.exports = { getUserAndPassword };
