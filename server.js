import express, { request, response } from 'express'
const app = express();
app.use(express.json());

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

app.post('/users', (req, res) => {
    
    users.push(req.body);
    res.status(201).json(req.body);
});

app.get('/users', (request, response) => {
    response.status(200).json(users);
});

app.listen(3000);