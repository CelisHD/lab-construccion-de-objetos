

// Type your code below this line!


function shoppingList() {    // lista de compras = shoppingList
  this.items = []
}

const count = parseInt(process.argv[2])
const myList = new shoppingList()

for (let i = 0; i < count; i++) {        // Ejemplo: let nombre = "Ana" console.log(nombre) Ana.
  myList.items.push(process.argv[3 + i]) // agrega cada producto al arreglo
}

console.log(myList.items)

//         LEER EL MENSAJE                //

// 'ShoppingList' es un constructor que crea un objeto con una propiedad 'items',
// que es un arreglo donde se guardan los nombres de los productos.
// let se usa para declarar una variable en JavaScript. Es decir, para guardar un valor en memoria con un nombre que tú elijas.
