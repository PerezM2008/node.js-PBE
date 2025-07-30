/*********************************************************
 * Apresentar comando básico do Node.js
 * Autor: MATHEUS PEREZ
 * Data: 29/07/2025
 * versão: 1.0
 */

//Cométario em linha
/* Coméntario em bloco */

//Importe da classe readline do Node.JS
const { Console } = require('console')
var readline = require('readline')

//Cria uma interface de comunicação com o terminal para entrada e saida de dados
//interage com o usuário

var entradaDeDados = readline.createInterface({
    input: process.stdin,

    output: process.stdout
})

entradaDeDados.question('Digite seu nome:', function(nome){

    var nomeUsuario = nome

    if(nomeUsuario == ''){
        console.log('ERRO: Não foi possível processar a requisição, campo obrigatório')
    }else{
        //String() -> converte uma variavel em String
        //toUpperCase() -> converte o conteúdo de uma variavel em MAIUSCULO
        console.log(`O nome de usuário foi: ${String(nomeUsuario).toUpperCase()}`)
    }
   
})

/*
//Permite escrever um conteúdo de uma String ou Objeto no terminal
console.log("Aula 01 de Node.JS")

//Permite criar uma variavel
var nome = 'Matheus Perez'

//Exemplo de concatenação de conteúdo (string + variável)
console.log('O nome digitado foi ' + nome + '!')

//Outro modo de concatenar de forma eficiente
console.log(`O nome digitado foi: ${nome}!`)

//typeof() -> Retorna um tipo de dados de uma variável ou objeto
console.log(typeof(nome))

*/