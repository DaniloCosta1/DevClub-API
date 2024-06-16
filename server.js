import express, { request, response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
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



app.post('/users', async(req, res) => {
    
    await prisma.user.create({
        data:{
            email:req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });
    res.status(201).json(req.body);
});

app.get('/users', async (req, res) => {
    
    const users = await prisma.user.findMany();

    res.status(200).json(users);

});



app.listen(3000);