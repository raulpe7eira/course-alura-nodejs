module.exports = function (app) {
    app.get('/', function (req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (ex, result) {
            if (ex) return next(ex);
            res.render('home/index', { livros: result });
        });

        connection.end();
    });
}
