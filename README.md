# course-alura-nodejs
Projeto desenvolvido no curso da Alura: [Node.js: Inovando com Javascript no Backend](https://cursos.alura.com.br/course/node-js)

## Aulas
O progresso das aulas foi separado por branches.
- [Aula 01: Instalação do NodeJs](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-01)
- [Aula 02: Coesão e Acoplamento, organizando o código](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-02)
- [Aula 03: Verbos http](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-03)
- [Aula 04: Content negotiation](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-04)
- [Aula 05: Respeitando o accept](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-05)
- [Aula 06: Entendendo os detalhes](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-06)
- [Aula 07: Testes de integração (mocha + assert)](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-07(mocha%2Bassert))
- [Aula 07: Testes de integração (supertest)](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-07(supertest))
- [Aula 07: Testes de integração (node_env)](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-07(node_env))
- [Aula 08: WebSockets com socket.io](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-08)
- [Aula 09: Middlewares](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-09)
- [Aula 10: Deploy](https://github.com/raulpe7eira/course-alura-nodejs/tree/Aula-10)

## Deploy Local
Necessário ter um banco MySQL configurado e rodando para o código ser executado [(alterar configurações de acesso neste arquivo)](../master/app/infra/connectionFactory.js). Tanto na base de desenvolvimento (course_alura_nodejs_dsv), quanto na de teste (course_alura_nodejs_tst) é necessário ter a tabela a seguir criada:

```sql
CREATE TABLE produtos (
    id int(11) NOT NULL AUTO_INCREMENT,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL,
      PRIMARY KEY (id)
);
```

Para instalar e executar o código, é necessário ter o NodeJs instalado e executar os códigos a seguir, após iniciar com sucesso basta entrar em um navegador e acessar o endereço http://localhost:3000:

```bash
$ npm install
$ npm start
```

## Deploy Produção 
O deploy da versão final pode ser acessado pelo link a seguir:
- https://cource-alura-nodejs.herokuapp.com/
