
var inputSalario = document.querySelector("#ganho-mes")
var inputHoras = document.querySelector("#horas-dia")
var resultado = document.querySelector("#resposta")

function calcularValorHora(){

    var salario = inputSalario.valueAsNumber   
    var horas = inputHoras.valueAsNumber
    var horasMes = horas * 22
    var valorHora = salario / horasMes
    var valorDuasCasas = valorHora.toFixed(2)

    resultado.textContent = "R$ " + valorDuasCasas.replace(".", ",")
}



// ENTRADA 

// Quanto voce ganha por mes  -> 1000

// Quantas horas voce trabalha por dia -> 5 

// x = (5 * 5) *4 

// ganho do mes / x

// SAIDA 

// valor por hora trabalhada = ???
