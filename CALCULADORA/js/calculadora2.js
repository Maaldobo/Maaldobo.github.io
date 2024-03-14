const ID_CONTENEDOR_INPUT = 'txtInput'
const ID_CONTENEDOR_ERROR= 'txtError'
const ID_CONTENEDOR_HISTORIAL='txtHistorial'
let err=0

function Clear() {
    document.getElementById('txtError').value = '';
    document.getElementById('txtInput').value = '0';
    err=0;
}



function Borrar() {
    let input = document.getElementById(ID_CONTENEDOR_INPUT);
    let cadena = input.value.split('');
    cadena.pop();
    input.value = cadena.join('');
}

function GuardarDato(dato) {

    document.getElementById('txtInput').value+= dato
    console.log(document.getElementById('txtInput').value)
}

function MostrarResultadoEval() {
    let operacion = document.getElementById('txtInput').value;
    let resultado = Operar(operacion)
    document.getElementById('txtInput').value = resultado.join('')
    
}   

function Operar(operacion){

let str = [...operacion.match(/[+\-*/]|\d+(\.\d+)?/g)]
console.log(str)



     let resultado=str.slice()
         for(let i=0;i<str.length;i++){
         if(resultado[i]==='*'){
             let aux1= parseFloat(resultado[i - 1])
             let aux2= parseFloat(resultado[i + 1])

             let multiplicacion=aux1*aux2

             resultado.splice(i - 1, 3, multiplicacion.toString());
             i--;
                         
         }

         if(resultado[i]==='/'){
            let aux1= parseFloat(resultado[i - 1])
            let aux2= parseFloat(resultado[i + 1])
             if(aux2==0){
                reportaError("NO HAY DIVISION ENTRE CERO")
                err++
                }
            let division=aux1/aux2

            resultado.splice(i - 1, 3, division.toString());
            i--;
           
        }
         
        }

           for(let i=0;i<str.length;i++){
            if(resultado[i]==='+'){
                let aux1= parseFloat(resultado[i - 1])
                let aux2= parseFloat(resultado[i + 1])
                console.log(aux1)
                console.log(aux2)
                let suma=aux1+aux2
                resultado.splice(i - 1, 3, suma.toString());
                i--;
               
            }
            if(resultado[i]==='-'){
                let aux1= parseFloat(resultado[i - 1])
                let aux2= parseFloat(resultado[i + 1])
                let resta=aux1-aux2
                resultado.splice(i - 1, 3, resta.toString());
                i--;
               
            }
           }
if(err== 0){
    console.log(resultado)
    return resultado
    }
else{
    resultado =[];
    return resultado
}

           
}
    
function reportaError(mensaje) {
    let contenedorRespuesta = document.getElementById('txtError');
    contenedorRespuesta.setAttribute("class", "")
    contenedorRespuesta.classList.add('error')
    contenedorRespuesta.innerText += mensaje +"\n"
    
  
     
}
function actualizaHistorial(mensaje){
    document.getElementById('txtHistorial').value+= mensaje
    
    
}
/*
function MostrarResultadoEval() {
    let input = document.getElementById(ID_CONTENEDOR_INPUT);
    let resultado = eval(input.value);
    input.value = resultado;
}
*/


