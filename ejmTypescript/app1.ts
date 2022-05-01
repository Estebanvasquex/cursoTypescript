
(function (){ /* FUNCION ANONIMA AUTO INVOCADA */

/*     function saludar( nombre:string ) {
    console.table( 'Hola ' + nombre ); // Hola Logan
}


const wolverine = {
    nombre: 'Logan',
    direccion: 34
};


saludar("esteban"); */
var mensaje = 'hola';

if (true){
    var mensaje = 'mundo'
}
console.log(mensaje)
  
})(); 


(function (){
    
    let mensaje: string = 'hola';
    let numero: number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();

    let cualquiercosa: string | boolean | Date | number;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    }

    spiderman = {
        nombre: 'Esteban',
        edad:40
    }







})();