import PromptSync from "prompt-sync"

// Type your code below this line!

const prompt = PromptSync();

console.log("Bienvid@ a tu ShoppingList: 💳🛍️🛒");
let number_element = prompt("Cuantos elementos deseas añadir: ");

function shoppingList() {    // lista de compras = shoppingList
  this.items = []
}

//const count = parseInt(process.argv[2])
const myList = new shoppingList()


for (let i = 0; i < number_element; i++) {       // Ejemplo: let nombre = "Ana" console.log(nombre) Ana.

  let name_element = prompt("Nombre del elemento: ");     // Guardamos el nombre del elemento ingresado por el usuario

  let buscarElemento = myList.items.find(p => p.includes(name_element)); // Buscamos si el elemento ingresado existe 

  if (buscarElemento == name_element){ // Preguntamos si el elemento ingresado es igual al resultado de la busqueda

    console.log("elemento ya fue registrado: ", buscarElemento ); // Mostramos que el elemento ya existe 
    i--; // Restamos el contador para mantener la cantidad de intentos 

  } else {
    myList.items.push(name_element);  // Añadimos el nuevo elemento a la lista 
  
  }
  
}

console.log(myList.items)

//         LEER EL MENSAJE                //

// 'ShoppingList' es un constructor que crea un objeto con una propiedad 'items',
// que es un arreglo donde se guardan los nombres de los productos.
// let se usa para declarar una variable en JavaScript. Es decir, para guardar un valor en memoria con un nombre que tú elijas.
