// Externas
const express = require('express');
const mongoose = require('mongoose');

// Internas
const routes = require('./routes');

// Utilizadas
const app = express();
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://traumer:luccas@cluster0-x0aop.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(express.json());
app.use(routes);


app.listen(3333);

/*
 METODOS HTTP: GET, POST, PUT e DELETE
 get vai pegar uma informação
 Post para criar uma informação, um cliente, um produto
 put vai alterar uma informação
 delete vai excluir uma info
----------------------------------------------------------------------------------------------------
 Tipos de Parametros Express: Query Params, Routes Params, Body
 Query Params: Utilizados em sua maioria em metodos get e utilizados para filtros, ordenação, paginação ...
 request.query()
 Routes Params: Ultilizados em sua maioria em metodos put e delete, pois é informação ja existente e especificado
 request.params()
 Body: Ultilizado no POST e no PUT, para pegar dados do corpo da requisição
 request.body()
*/