/**
 * Exemplo de como seria o require implementado pelo NodeJs (baseado no padrão CommonJs).
 * @param {*} path 
 */
function require(path) {
    var codigoDoSeuModulo = carregado(path);
    var funcaoDeCarregamento = function () {
        eval(codigoDoSeuModulo);
    }
    var module = {
        exports: {}
    };
    funcaoDeCarregamento(module, module.exports);
    return module;
}
