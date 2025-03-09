var pool = require('./db');


async function getNovedades() {
        var query = 'SELECT * FROM novedades';
        var rows = await pool.query(query); 
        return rows; 
}

async function deleteNovedadesById(id) {
    var query = 'DELETE FROM novedades WHERE id = ?';
    var rows = await pool.query(query, [id]); 
    return rows; 
}

module.exports = { getNovedades, deleteNovedadesById }