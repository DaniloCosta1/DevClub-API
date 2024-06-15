import express, { request, response } from 'express'
const app = express();

/*HTTP MÉTODOS
GET -> LISTAR
POST -> CRIAR
PUT -> EDITAR VARIOS
PATCH -> EDITAR UM
DELETE -> DELETAR
*/

/*
    1) TIPO DE ROTA / MÉTODO HTTP
    2) ENDEREÇO
*/

/*
    CRIAR UMA API DE USUÁRIOS
    -Criar um usuário
    -Listar todos os usuários
    -Editar um usuário
*/

const users = [];

app.post('/usuarios', (req, res) => {
    console.log(req);
    res.send('ok, aqui deu certo');
});

app.get('/usuarios', (request, response) => {
    response.send('ok, deu bom')
});

app.listen(3000);