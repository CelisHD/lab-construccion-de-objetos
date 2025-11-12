import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Objetivo de Task 2: Modificar el constructor Mail para que reciba el asunto y el mensaje desde la línea de comandos usando process.argv[3] y process.argv[4]. Luego crear una instancia con new Mail(...) y mostrarla por consola.

function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;
}

// Los argumentos vienen desde la línea de comandos:
const asunto = process.argv[3];
const mensaje = process.argv[4];

const email = new Mail(asunto, mensaje);
console.log(email);


//Qué hace cada línea importante:

//function Mail(asunto, mensaje) { ... } — define la función constructora. this.asunto y this.mensaje serán las propiedades del objeto creado.

//const asunto = process.argv[3]; — toma el tercer argumento pasado por la terminal (asunto).

//const mensaje = process.argv[4]; — toma el cuarto argumento (mensaje).

//const email = new Mail(asunto, mensaje); — crea una nueva instancia del tipo Mail.

//console.log(email); — imprime el objeto en consola (verás algo como Mail { asunto: 'hola', mensaje: 'mundo' }).


//¿qué significa cada número []?

//0 --> node
//1 -->index.js
//2 -->número de la tarea
//3 -->asunto
//4 -->mensaje