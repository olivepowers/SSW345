const mysql = require('mysql');

//set database connection credentials
const config = {
    host: '162.243.235.211',
    user: 'user345',
    password: 'Password1@',
    database: 'db345',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;


