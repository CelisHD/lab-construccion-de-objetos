// Type your code below this line!

function Journey(start, end) {
    this.start = start;
    this.end = end;
}
const from = process.argv[3];
const to = process.argv[4];

// Type your code above this line!

const travel = new Journey(from, to)
// travel = viajar 
console.log("Booking a taxi from " + "<" + travel.start + ">" + " to " + "<" + travel.end + ">")


//                  LEER EL MENSAJE                //

// 'Journey' es un constructor (const) que crea un objeto con dos propiedades: 'start' y 'end'.
// Estas propiedades representan el punto de partida y el destino del viaje.

// 'from' y 'to' son variables que guardan los valores del inicio y el final del recorrido.
// Luego se crean como argumentos al instanciar 'Journey' con 'new Journey(from, to)'.

// Finalmente, se muestra un mensaje en consola que indica el viaje,
// combinando los valores almacenados en 'travel.start' y 'travel.end'.
// travel = viajar: travel no es una función de JavaScript — es una variable que tú defines para guardar un valor u objeto.