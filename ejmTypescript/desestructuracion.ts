"use strict";

/* FUNCION ANONIMA AUTO INVOCADA */
/* (function () {



})(); */

/* FUNCION FLECHA ANONIMA AUTO INVOCADA */

(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    const  extraer = ({nombre, poder}: any) => { /* SE REALIZA DESESTRUCTURACIÓN DEL OBJETO EN PARAMETRO SE PUEDEN LLAMAR DESORDENAMENTE*/

        /* const {nombre,poder} = avenger; */
        console.log(nombre);
        console.log(poder);

    }

/*     extraer (avenger); */

const avengers: string[] = ['Thor', 'ironman', 'spiderman'];

const [ , , spiderman] = avengers;/*  PARA LOS ARREGLOS DEBE TENER EL MISMO ORDEN DE LOS INDICE EN EL CASO QUERER SALTAR UN PARAMETRO SE DEBEN PONER COMAS*/

console.log(spiderman);

const extraerArray = ([Thor, ironman, spiderman]: String[]) => {
    console.log(Thor);
    console.log(ironman);
    console.log(spiderman);
}

extraerArray(avengers)

})();








