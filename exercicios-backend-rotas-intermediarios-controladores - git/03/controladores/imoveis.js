const imoveis = require('../dados')

const listaCompleta = (req, res) => {
    res.json(imoveis)
}


const enderecoId = (req, res) => {
    const { id } = req.params

    const idEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    });



    res.json(idEncontrado)
}














module.exports = {
    listaCompleta,
    enderecoId
}