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

    if (process.env.NODE_ENV == 'production') {
        var url = process.env.CLEARDB_DATABASE_URL;
        var grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
        return mysql.createConnection({
            host:grupos[3],
            user:grupos[1],
            password:grupos[2],
            database:grupos[4]
        });
    }
}

module.exports = function () {
    return createDBConnection;
}
