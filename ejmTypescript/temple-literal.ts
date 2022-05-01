"use strict";
(function () {

    function getEdad(){
        return 100 * 10 *10 +60
    }
    const nombre = 'Esteban';
    const apellido = 'Vásquez'
    const edad = 38

    /* TEMPLE LITEREALES */

    /* Esteban Vásquez (edad:38) */
    const salida = ` el usuario es: ${nombre} ${apellido}  ( ${ getEdad() } )`
    console.log(salida)


})();




