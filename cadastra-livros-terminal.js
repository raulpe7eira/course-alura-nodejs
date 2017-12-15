var http = require('http');

var produto = {
    titulo : '+Sobre NodeJs',
    descricao: 'Node, JavaScript e um pouco sobre HTTP',
    preco: '100'
}

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var client = http.request(configuracoes, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo: ' + body);
    });
});

client.end(JSON.stringify(produto));
