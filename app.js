/*************************************************************************
 * Objetivo: Criação de uma API que ofereca perguntas e calcule resultados com base nos chales da serie "Percy Jackson"
 * Data: 06/01/24
 * Autor: Letícia Melo Silva
 * Versão: 1.0
*************************************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

// //Funcao que pega todos os produtos marcados como favoritos
// app.get('/produtos/favoritos', cors(), async function (request, response, next) {
//     let funcoes = require('./modulo/tony_pizzaria')
//     let listaFavoritos = funcoes.getFavoritas();

//     if (listaFavoritos) {
//         response.json(listaFavoritos)
//         response.status(200)
//     }
//     else {
//         response.status(404);
//     }
// })

// // funcao que pega todos os dados do perfil com base no email do usuario
// app.get('/perfil/usuario/:email', cors(), async function (request, response, next) {

//     let entrada = request.params.email
//     let funcoes = require('./modulo/tony_pizzaria.js')
//     let dadosPerfil = funcoes.getPerfil(entrada)

//     if (dadosPerfil) {
//         response.json(dadosPerfil)
//         response.status(200)
//     }
//     else {
//         response.status(404);
//         response.json({ erro: 'Item não encontrado' })
//     }
// })

app.listen('8080', function () {
    console.log('API funcionando!!!! Bom trabalho, dá uma descançada, um cafezinho nunca cai mal!!')
})
