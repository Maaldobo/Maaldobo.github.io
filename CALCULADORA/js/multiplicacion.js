operacion="3-2.0*5*1*2+2+8*8+6/2-25"

let str = [...operacion.match(/[+\-*/]|\d+(\.\d+)?/g)]
console.log(str)



     let resultado=str.slice()
     //console.log(resultado)
     for(let i=0;i<str.length;i++){
         if(resultado[i]==='*'){
             let aux1= parseFloat(resultado[i - 1])
             let aux2= parseFloat(resultado[i + 1])
            //  console.log(aux1)
            //  console.log(aux2)
             let multiplicacion=aux1*aux2
             //console.log(multiplicacion)
             resultado.splice(i - 1, 3, multiplicacion.toString());
             i--;
                         
         }
         //console.log(resultado)
         if(resultado[i]==='/'){
            let aux1= parseFloat(resultado[i - 1])
            let aux2= parseFloat(resultado[i + 1])

            let division=aux1/aux2
            resultado.splice(i - 1, 3, division.toString());
            i--;
           
        }
         
        }
        console.log(resultado)
        
        // for(let i=0;i<str.length;i++){
        //     if(resultado[i]==='/'){
        //         let aux1= parseFloat(resultado[i - 1])
        //         let aux2= parseFloat(resultado[i + 1])
        //         console.log(aux1)
        //         console.log(aux2)
        //         let division=aux1/aux2
        //         //console.log(multiplicacion)
        //         resultado.splice(i - 1, 3, division.toString());
        //         i--;
               
        //     }
        //    }
        //    console.log(resultado)

           for(let i=0;i<str.length;i++){
            if(resultado[i]==='+'){
                let aux1= parseFloat(resultado[i - 1])
                let aux2= parseFloat(resultado[i + 1])
                console.log(aux1)
                console.log(aux2)
                let suma=aux1+aux2
                //console.log(multiplicacion)
                resultado.splice(i - 1, 3, suma.toString());
                i--;
               
            }
            if(resultado[i]==='-'){
                let aux1= parseFloat(resultado[i - 1])
                let aux2= parseFloat(resultado[i + 1])
                console.log(aux1)
                console.log(aux2)
                let resta=aux1-aux2
                //console.log(multiplicacion)
                resultado.splice(i - 1, 3, resta.toString());
                i--;
               
            }
           }
           console.log(resultado)


// let fact = operacion.match(/\d+(\.\d+)?\*+\d+(\.\d+)?/g).join('')
// console.log(fact)
// let jerarquia_1=1
// console.log(jerarquia_1)
// for(i=0;i<str.length;i++){
//     if(str[i]=== '*'){
//         let aux =str[i-1]*str[i+1]
//         jerarquia_1*=aux
//         i++
//     }
// }
// console.log(jerarquia_1)



//  let cofact = fact.match(/[*]|\d+(\.\d+)?/g)
//  console.log(cofact)
// producto=1
// cofact.forEach(element => {
//     producto*=element
// });

// console.log(producto)