// Type your code below this line!
function Mail(subj, msg) {
  this.subject = subj
  this.message = msg

  this.printMail = function () {
    console.log( this.subject + ": " +  this.message)
  }
}

const newMail = new Mail(process.argv[3], process.argv[4])
newMail.printMail()

//               LEER EL MENSAJE           //

// 'new Mail(...)' crea una nueva instancia del objeto Mail a partir del constructor (const).
// Dentro del constructor, 'this' hace referencia al nuevo objeto que se está creando,
// lo que permite asignar sus propiedades (subject y message) de forma individual a cada instancia.

// El método 'printMail()' imprime en consola el contenido del objeto Mail.
// Utiliza 'this' para acceder a las propiedades del mismo objeto y mostrarlas
// en un formato legible: "<asunto>: <mensaje>".
