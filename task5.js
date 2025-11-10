

// Type your code below this line!
function FriendsList() {
  this.friends = []
}
// Type your code above this line!
const count = parseInt(process.argv[2])
const myList = new FriendsList()

for (let i = 0; i < count; i++) {
  myList.friends.push(process.argv[3 + i])
}
// Cuando usas new FriendsList(), se crea un objeto con una propiedad names, que es un arreglo vacío.
console.log(myList.friends)


//         LEER EL MENSAJE                //

// se ejcuta asi: node task5.js 3 Ana Pedro Lucia  (asi deberia salir [ 'Ana', 'Pedro', 'Lucía' ])
// En resumen, 'FriendsList' sirve para guardar y visualizar una lista de amigos ingresados por el usuario.
// Mediante un bucle 'for', los nombres se van incorporando según la cantidad indicada por el usuario.
// Finalmente, el programa muestra en consola la lista completa de amigos almacenados.
// Si no se ingresa correctamente el número de nombres, el arreglo quedará vacío ([]).