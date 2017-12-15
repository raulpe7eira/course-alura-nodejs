module.exports = function (app) {
    app.get('/produtos', function (req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (ex, result) {
            if (ex) return next(ex);
            res.format({
                html: function () {
                    res.render('produtos/lista', { lista: result });
                },
                json: function () {
                    res.json(result)
                }
            });
        });

        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form', { errosValidacao: {}, produto: {} });
    });

    app.post('/produtos', function (req, res, next) {
        var produto = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();
        if (erros) {
            res.format({
                html: function () {
                    res.status(400).render('produtos/form', { errosValidacao: erros, produto: produto });
                },
                json: function () {
                    res.status(400).json(erros);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (ex, result) {
            if (ex) return next(ex);
            res.redirect('/produtos');
        });

        connection.end();
    });
}
