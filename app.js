"use strict";
/* FUNCION ANONIMA AUTO INVOCADA */
/* (function () {



})(); */
/* FUNCION FLECHA ANONIMA AUTO INVOCADA */
(() => {
    /* LAS CLASES
       SON SOPORTADAS EN ES6 EN ADELANTE,  COSAS QUE SE PUEDEN ABSTRAER COSAS QUE AYUDAN A MANEJAR MAS FACILMENTE EL PROGRAMA
   
       LAS CLASES POR CONVENCIÓN USAN UPERCAMELCASE LA PRIMERA LETRA MAYUSCULA Y EL RESTO DE PALABRAS IGUAL
   
       METODOS
       SON COSAS QUE PUEDEN HACER LAS CLASES
   
       PROPIEDADES
       SON COSAS QUE DESCRIBEN LAS CLASES
   
       HERENCIA
       ES LA FORMA EN QUE LOS HIJOS PUEDEN RECIBIR PROPIEDADES DE UN PADRE, NO HYA LIMITES
       
       */
    /*        constructor: ES UNA FUNCIÓN QUE SE EJECUTA CUANDO SE CREA UNA NUEVA INSTANCIA DE LA CLASE  CON EL SE PUEDEN PASAR LAS PROPIEDADES DE UN NUEVO OBJETO*/
    /* SE CREA LA CLASE Y SE CREAN VALORES PARA LAS PROPIEDADES */
    /*     class Avenger{
    
            nombre: string = "Capitan America"
            equipo: string;
            nombreReal: string;
    
            puedePelear: boolean;
            peleasGanadas: number;
          
            constructor(nombre: string, equipo:string){
                this.nombre = nombre;
                this.equipo = equipo;
            }
        }
        const antman = new Avenger();
        console.log(antman) */
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear = true, /* VALORES POR DEFECTO */ peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi', 'Pepito');
    console.log(antman);
})();
