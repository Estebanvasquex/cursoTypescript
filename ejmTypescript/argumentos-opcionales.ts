"use strict";
(function () {

    /* ORDEN DE LOS PARAMETROS DE UNA FUNCIÓN, OBLIGATORIO, OPCIONALES, POR DEFECTO */

    function activar (  quien: string,
                        momento?: string, /* EL ? HACE QUE EL PARAMETRO SEA OPCIONAL */
                        objeto: string = 'batiseñal'){

        if (momento){
             console.log(`${quien} en la ${momento} activo la ${objeto}`);
        }
        else{
            console.log(`${quien} activo el ${objeto}`);

        }
    }
    activar('Gordon',);




})();




