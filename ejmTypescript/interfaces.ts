"use strict";

/* FUNCION ANONIMA AUTO INVOCADA */
/* (function () {



})(); */

/* FUNCION FLECHA ANONIMA AUTO INVOCADA */

(() => {
/* 
    interface: SON UNA FORMA DE DEFINIR REGLAS PARA QUE NOSTROS O OTRAS PERSONAS SIGUAN LAS REGLAS SI QUIEREN UTILIZAR EL OBJETO */
    
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string; /* CON EL SIGNO DE INTERROGACIÓN LA PROPIEDAD QUEDA COMO OPCIONAL */
    }

    const enviarMision = (xmen: Xmen) => { /* AQUÍ SE LLAMA LA interface Xmen, de esta forma la función reconoce los tipos de datos que se han declarado en la interface */
        console.log(`enviado a ${xmen.nombre} a la misión`);
    }

    const regresarAlCuartel = (xmen: Xmen) => {
        console.log(`Regresando ${xmen.nombre} al cuartel`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad:60
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);


})();








