const ID_CONTENEDOR_INPUT = 'txtInput'
const ID_CONTENEDOR_ERROR= 'txtError'
const ID_CONTENEDOR_HISTORIAL='historial' 
let err=0


function Clear() {
    document.getElementById('txtInput').value = '0'
    document.getElementById(ID_CONTENEDOR_ERROR).innerText = '' 
    err=0;
}



function Borrar() {
    let input = document.getElementById(ID_CONTENEDOR_INPUT)
    let cadena = input.value.split('')
    cadena.pop();
    input.value = cadena.join('')
}

function GuardarDato(dato) {

    document.getElementById('txtInput').value += dato
    console.log(document.getElementById('txtInput').value)
}

function MostrarResultadoEval() {
    let operacion = document.getElementById('txtInput').value
    let resultado = Operar(operacion)
    console.log(resultado)
    actualizaHistorial(operacion + " = " + resultado + "\n")
    document.getElementById('txtInput').value = resultado.join('')
}
function Operar(operacion) {
let str = [...operacion.match(/[+\-*/]|\d+(\.\d+)?/g)]
console.log(str)

let resultado = str.slice()

for (let i = 0; i < str.length; i++) {
    if (resultado[i] === '*') {
        let aux1 = parseFloat(resultado[i - 1])
        let aux2 = parseFloat(resultado[i + 1])

        if (isNaN(aux2)) {
            if (resultado[i + 1] === '-') {
                if (!isNaN(parseFloat(resultado[i + 2]))) {
                    aux2 = -parseFloat(resultado[i + 2])
                    let multiplicacion = aux1 * aux2
                    resultado.splice(--i, 4, multiplicacion.toString())
                } else {
                    reportaError("Error de sintaxis")
                    return ["Error de sintaxis"]
                }
            } else {
                reportaError("Error de sintaxis")
                return ["Error de sintaxis"]
            }
        } else {
            let multiplicacion = aux1 * aux2;
            resultado.splice(--i, 3, multiplicacion.toString())
        }
    }

    if (resultado[i] === '/') {
        let aux1 = parseFloat(resultado[i - 1])
        let aux2 = parseFloat(resultado[i + 1])

        if (isNaN(aux2)) {
            if (resultado[i + 1] === '-') {
                if (!isNaN(parseFloat(resultado[i + 2]))) {
                    aux2 = -parseFloat(resultado[i + 2])
                    let division = aux1 / aux2
                    resultado.splice(--i, 4, division.toString())
                } else {
                    reportaError("Error de sintaxis")
                    return ["Error de sintaxis"]
                }
            } else {
                reportaError("Error de sintaxis")
                return ["Error de sintaxis"]
            }
        } else {
            if (aux2 === 0) {
                reportaError("No se puede dividir entre cero")
                return ["No se puede dividir entre cero"]
            }
            let division = aux1 / aux2
            resultado.splice(--i, 3, division.toString())
        }
    }

    if (resultado[i] === '+') {
        let aux1 = parseFloat(resultado[i - 1])
        let aux2 = parseFloat(resultado[i + 1])

        if (isNaN(aux1) || isNaN(aux2)) {
            reportaError("Error de sintaxis")
            return ["Error de sintaxis"]
        }

        let suma = aux1 + aux2;
        resultado.splice(--i, 3, suma.toString())
    }

    if (resultado[i] === '-') {
        let aux1 = parseFloat(resultado[i - 1])
        let aux2 = parseFloat(resultado[i + 1])

        if (isNaN(aux1) || isNaN(aux2)) {
            reportaError("Error de sintaxis")
            return ["Error de sintaxis"]
        }

        let resta = aux1 - aux2
        resultado.splice(--i, 3, resta.toString())
    }
}

return resultado
}



function reportaError(mensaje) {
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_ERROR)
    contenedorRespuesta.innerHTML += mensaje + "\n"
}

function actualizaHistorial(mensaje) {
    let contenedorHistorial = document.getElementById(ID_CONTENEDOR_HISTORIAL)
    contenedorHistorial.innerHTML += mensaje + "\n"
    
}



