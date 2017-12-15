var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {

    it('#listagem de produtos json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#cadastro de produto c/ dados invalidos', function (done) {
        request.post('/produtos')
            .send({ titulo: "", descricao: "Novo livro" })
            .expect(400, done);
    });

    it('#cadastro de produto c/ dados validos', function (done) {
        request.post('/produtos')
            .send({ titulo: "Titulo", descricao: "Novo livro", preco: 20.50 })
            .expect(302, done);
    });

});
