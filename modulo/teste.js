var info = require('./info')

let valoresZeus = []
let valoresPoseidon = []
let valoresHades = []
let valoresApolo = []
let valoresHermes = []
let valoresAfrodite = []
let valoresHefesto = []
let valoresDionisio = []
let valoresDemeter = []
let valoresAres = []
let valoresAtena = []
let valoresIris = []

function perguntas(chale) {
    let jsonPerguntas = {}
    let cont = 0
    let status = false
    while (cont < info.deuses.deus.length) {
        if (chale == info.deuses.deus[cont].id) {
            jsonPerguntas.perguntas = info.deuses.deus[cont].perguntas
            status=true
        }
        cont++
    }
    if(status){
        return jsonPerguntas
    }
    else{
        return status
    }
}
// console.log(perguntas(2));

function calculos(valores,chale){
    let jsonPerguntas = {}
    let cont = 0
    let status = false
    while (cont < info.deuses.deus.length) {
        if (chale == info.deuses.deus[cont].id) {
            // let total=valores.reduce((total, currentElement)=>total+currentElement)
            jsonPerguntas.total=valores.reduce((total, currentElement)=>total+currentElement)
            status=true
        }
        cont++
    }
    if(status){
        return jsonPerguntas
    }
    else{
        return status
    }
}
console.log(calculos([1,4,5,3,2,5,1,2,5,1,3,5,4,3,2,3,4,2,5,1],1));

    