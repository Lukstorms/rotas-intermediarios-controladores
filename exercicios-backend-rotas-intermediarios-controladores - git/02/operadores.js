let contador = 0

const { jogadores } = require('./jogadores')


const quemJoga = (req, res) => {
    res.send(`É a vez de ${jogadores[contador]} jogar!`);
    if (contador < jogadores.length - 1) {
        contador++
    } else {
        contador = 0
    }
}


const remova = (req, res) => {
    const { removido } = req.query

    if (removido > jogadores.length) {
        res.send(`Não existe jogador no indice informado (${removido}) para ser removido`)
    } else {
        jogadores.splice(Number(removido) - 1, 1)
        res.send(jogadores)
    }
}

const adicione = (req, res) => {
    const { nome, indice } = req.query

    if (indice > jogadores.length) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
    } else if (!indice) {
        jogadores.push(nome)
        res.send(jogadores)
    } else {
        jogadores.splice(indice, 0, nome)
        res.send(jogadores)
    }

}


module.exports = {
    quemJoga,
    remova,
    adicione
}