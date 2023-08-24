const fs = require('fs')

fs.readFile('aquivo.txt', 'ufa8', (erro,dados) => {
    if(erro) {
        console.log(erro)
    }

    console.log(dados)
})