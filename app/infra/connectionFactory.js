var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
        return mysql.createConnection({
            host: '192.168.99.100',
            port: '3306',
            user: 'root',
            password: '',
            database: 'course_alura_nodejs_dsv'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: '192.168.99.100',
            port: '3306',
            user: 'root',
            password: '',
            database: 'course_alura_nodejs_tst'
        });
    }

    if (process.env.NODE_ENV == 'prod') {
        return mysql.createConnection({
            host: '192.168.99.100',
            port: '3306',
            user: 'root',
            password: '',
            database: 'course_alura_nodejs'
        });
    }
}

module.exports = function () {
    return createDBConnection;
}
