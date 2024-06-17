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


//_________POST________________________
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

//_________GET_________________________
app.get('/users', async (req, res) => {

    console.log(req);
    
    const users = await prisma.user.findMany();

    res.status(200).json(users);

});

//_____________PUT_____________________
app.put('/users/:id', async(req, res) => {
    
    await prisma.user.update({
        where: {
            id:req.params.id
        },
        data:{
            email:req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });
    res.status(201).json(req.body);
});

//____________DELETE___________________
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({message: "Usuário deletado!"});
})



app.listen(3000);