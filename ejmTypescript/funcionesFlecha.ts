"use strict";
(function () {

    const miFuncion = function(a: string){
        return a;
    }

    const miFuncion2 = (a: string) => a.toUpperCase();

    console.log(miFuncion('sebastian funcion tradicional'))
    console.log(miFuncion2('alejandro función flecha'))


    const hulk ={
        nombre: 'Hulk',
        smash() {

            setTimeout( () =>{
                console.log(`${this.nombre} smash!!!`)

        }, 1000);
    }
    }
    hulk.smash();

})();










