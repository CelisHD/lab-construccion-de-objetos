import PromptSync from "prompt-sync"

const prompt = PromptSync();

// Type your code above this line!
let count = prompt("Cuantos nombres desea agregar: ");
//const count = parseInt(process.argv[3])
const myList = new FriendsList()

for (let i = 0; i < count; i++) {

  myList.friends.push(prompt("ingrese el nombre: "))
}
// Cuando usas new FriendsList(), se crea un objeto con una propiedad names, que es un arreglo vacío.
console.log(myList.friends)

// Type your code below this line!
function FriendsList() {
  this.friends = []
}

//         LEER EL MENSAJE                //

// se ejcuta asi: node task5.js 3 Ana Pedro Lucia  (asi deberia salir [ 'Ana', 'Pedro', 'Lucía' ])
// En resumen, 'FriendsList' sirve para guardar y visualizar una lista de amigos ingresados por el usuario.
// Mediante un bucle 'for', los nombres se van incorporando según la cantidad indicada por el usuario.
// Finalmente, el programa muestra en consola la lista completa de amigos almacenados.
// Si no se ingresa correctamente el número de nombres, el arreglo quedará vacío ([]).