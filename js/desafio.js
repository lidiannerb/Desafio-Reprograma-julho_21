var inputValorHora = document.querySelector("#valor-hora")
var inputHorasProjeto = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

function calcular(){
    var valorHora = inputValorHora.valueAsNumber
    var horasProjeto = inputHorasProjeto.valueAsNumber
    var valorProjeto = valorHora * horasProjeto

    var valorDuasCasas = valorProjeto.toFixed(2)

    resultado.textContent = "R$ " + valorDuasCasas.replace(".", ",")

}