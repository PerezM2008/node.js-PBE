/***************************************************************************************
 * Objetivo: Arquivo responsável por calcular e validar médias escolares
 * Autor: Matheus Perez
 * Data: 05/08/2025
 * Versão: 1.0
 * 
**************************************************************************************/
function calcularMedia (valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 =Number(valor3)
    let nota4 =Number(valor4)

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
    return Number(media).toFixed(1)
}

//Função para retornar o status da média escola (APROVADO, EXAME, REPORVADO)
function validarStatusMedia (valorMedia){
    let media = Number(valorMedia)

    if(media < 5 && media >=0){
        statusAluno = 'REPROVADO'
    }else if(media >= 5 && media < 7){
        statusAluno = 'EXAME'
    }else if(media >= 7 && media <= 10){
        statusAluno = 'APROVADO'
    }
    if(statusAluno != undefined){
        return statusAluno
    }else{
        return false
    }
    

}


//let mediaAluno = calcularMedia('8', '1', '5.6', '8.9')
//console.log(mediaAluno)
//console.log(validarStatusMedia(mediaAluno))

//Permite tornar public uma função, variavel, constante, objeto
module.exports = {
    calcularMedia,
    validarStatusMedia
}
