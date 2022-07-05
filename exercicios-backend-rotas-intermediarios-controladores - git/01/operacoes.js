const somar = (req, res) => {

    const { num1 } = req.query
    const { num2 } = req.query

    const resultado = Number(num1) + Number(num2)

    res.json(resultado)
}

const subtrair = (req, res) => {

    const { num1 } = req.query
    const { num2 } = req.query

    const resultado = Number(num1) - Number(num2)

    res.json(resultado)
}

const multiplicar = (req, res) => {

    const { num1 } = req.query
    const { num2 } = req.query

    const resultado = Number(num1) * Number(num2)

    res.json(resultado)
}

const dividir = (req, res) => {

    const { num1 } = req.query
    const { num2 } = req.query

    const resultado = Number(num1) / Number(num2)

    res.json(resultado)
}











module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}