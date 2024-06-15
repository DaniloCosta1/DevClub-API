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
app.get('/usuarios', (request, response) => {
    response.send('ok, deu bom')
});

app.listen(3000);