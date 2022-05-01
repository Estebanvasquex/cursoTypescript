"use strict";

/* FUNCION ANONIMA AUTO INVOCADA */
/* (function () {



})(); */

/* FUNCION FLECHA ANONIMA AUTO INVOCADA */

(() => {
    

    const retirarDinero = (montoRetirar: number): Promise<number>  => {
        
        let dineroActual = 1000;
        
        return new Promise((resolve, reject) => {
            if(montoRetirar > dineroActual){
                reject('No hay suficienes fondos') /* CAPTURAR EL ERROR */
            }
            else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        })

    }
    retirarDinero(50)
    .then(montoActual => console.log(`Me quedan ${montoActual}`)) 
    .catch(console.warn) /* CAPTURAR EL ERROR */

 

})();








