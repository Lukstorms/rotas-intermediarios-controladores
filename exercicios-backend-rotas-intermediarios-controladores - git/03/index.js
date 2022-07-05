const express = require('express');

const app = express();

const { listaCompleta, enderecoId } = require('./controladores/imoveis')



app.get('/imoveis', listaCompleta)


app.get('/imoveis/:id', enderecoId)










app.listen(8000);