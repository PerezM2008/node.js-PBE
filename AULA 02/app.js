/************************************************
 * Objetivo: Criar um app para calculo de médias Escolares
 * Autor: Matheus Perez
 * Data: 30/07/2025
 * Versão: 1.0s
************************************************/

//Import da biblioteca para permitir a entrada de dados pelo terminal
var readline = require('readline')

//Criando uma interface de entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

/***
 * Criando variaveis
 * VAR -> Permite criar um espaço em memória (variavel) que pode ser alterando 
 na programação. Obs. Método antigo de criar variaveis

 * LET -> Permite criar um espaço em memoria (variaveis) em que pode alterada 
 *  na programação. Essas variaveis "morrem" ao termino do bloco {},
    por exemplo: IF, Function, loop, etc


 * CONST -> Permite criar um espaço em memória (variavel) que pode ser alterando 
    na programação. A CONST pode ser utilizada em qualquer parte do código.
    É uma boa pratica se possível usar letras MAIUSCULAS

 * toUpperCase() -> Converte a String para MAIUSCULA
 *
 * toLawerCase() -> Converte a String para minuscula
 * 
 * 
 * CONVERSÃO DE TIPOS DE DADOS:
 * 
 * String() -> converte um objeto ou variavel para o tipo de dados String
 * Number() -> Converte uma variavel para numero, podendo ser int ou float conforme a necessidade
 * parseInt() -> Converte uma variavel para numeor inteiro
 * parceFloat() -> Converte uma variavel para numero decimal
 * Boolean() -> Converte uma variavel para valor boolean (true/false - verdadeiro ou falso)
 * Object() ->Converte uma variavel para umn objeto (array, json, classe)
 * 
 * 
 * OPERADORES DE COMPARAÇÃO:
 * 
 * == Validação para comparar a igualdade de conteúdos
 * != Validação para comparar a diferenças entre conteúdos
 * <  Validação para verificar o menor valor
 * >  Validação para verificar o maior valor
 * <= Validação para verificar a igualdade e o menor valor
 * >= Validação para verificar a igualdade e o maior valor
 * === Validação para comparar a igualdade de conteudos e a igualdade de tipos de dados
 * !== Validação para comparar a diferença de conteúdos e a igualdade de tipos de dados
 * !=! Validação para comparar a diferença de conteúdos e a diferença de tipos de dados
 * 
 * 
 * OPERADORES LÓGICOS
 * 
 *  E AND &&
 *  OU  OR ||
 *  NÃO  NOT !
 * 
 * 
 */


//Entrada de dados do Nome 
entradaDeDados.question('Digite o nome do aluno: ', function(nome){

    let nomeAluno = String(nome).toUpperCase()
    //Entrada de dados da Nota1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        entradaDeDados.question('Digite a nota 2: ', function(valor2){
         let nota2 = valor2

            entradaDeDados.question('Digite a nota 3: ', function(valor3){
            let nota3 = valor3

                entradaDeDados.question('Digite o nota 4: ', function(valor4){
                let nota4 = valor4

                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: Não foi possível calcular a média, pois existem campos que não foram preenchidos!')
                    }else if(nota1 < 0 || nota1 > 10 || nota1 < 0 || nota2 
                        //continuar a linha de cima
                    ){
                        console.log('ERRO: Não é possível receber numeros menores que 0 e maiores que 10')
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        let statusAluno

                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        } else if(media >= 5 && media < 7){
                            statusAluno = 'EXAME'
                        }else if(media >= 7 && media <= 10){
                            statusAluno = 'APROVADO'

                        }
                        console.log(`O Aluno: ${nomeAluno} teve a média: ${media.toFixed(1)} e está ${statusAluno}`)
                    }

                })//Fecha a entrada da nota4
            })//Fecha a entrada da nota3
        })//Fecha a entrada da nota2
    })//Fecha a entrada da nota1
})//Fecha a entrada do nome