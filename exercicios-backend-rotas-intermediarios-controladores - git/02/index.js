const express = require('express');

const app = express();



const { quemJoga, remova, adicione } = require('./operadores')



app.get('/', quemJoga);

app.get('/remover', remova)

app.get('/adicionar', adicione)

app.listen(8000, () => {
    console.log("Servidor inicializado na porta 8000");
});