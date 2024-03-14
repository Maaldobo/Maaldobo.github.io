const ID_CONTENEDOR_INPUT = 'txtInput'



function Clear() {
    document.getElementById('txtInput').value = '0';
}



function Borrar() {
    let input = document.getElementById(ID_CONTENEDOR_INPUT);
    let cadena = input.value.split('');
    cadena.pop();
    input.value = cadena.join('');
}

function GuardarDato(dato) {

    document.getElementById('txtInput').value += dato
    console.log(document.getElementById('txtInput').value)
}

function MostrarResultadoEval() {
    let operacion = document.getElementById('txtInput').value;
    let resultado = Operar(operacion)
    console.log(resultado)
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

            let multiplicacion = aux1 * aux2

            resultado.splice(--i, 3, multiplicacion.toString());
           
        }

        if (resultado[i] === '/') {
            let aux1 = parseFloat(resultado[i - 1])
            let aux2 = parseFloat(resultado[i + 1])
            if (aux2 == 0) {

                return ["no hay divison entre cero"]

            }
            let division = aux1 / aux2

            resultado.splice(--i, 3, division.toString());
          

        }

    }

    for (let i = 0; i < str.length; i++) {
        if (resultado[i] === '+') {
            let aux1 = parseFloat(resultado[i - 1])
            let aux2 = parseFloat(resultado[i + 1])
            console.log(aux1)
            console.log(aux2)
            let suma = aux1 + aux2
            resultado.splice(--i, 3, suma.toString());
       

        }
        if (resultado[i] === '-') {
            let aux1 = parseFloat(resultado[i - 1])
            let aux2 = parseFloat(resultado[i + 1])
            let resta = aux1 - aux2
            resultado.splice(--i, 3, resta.toString());
        

        }
    }
    return resultado
}


/*
function MostrarResultadoEval() {
    let input = document.getElementById(ID_CONTENEDOR_INPUT);
    let resultado = eval(input.value);
    input.value = resultado;
}
*/


