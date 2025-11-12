
// TASK 7 OBJETO COCHE


// CONSTRUCTOR CAR QUE DESCRIBE VEHICULO

function Car(marca, modelo, año, motor, color, kilometraje) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.motor = motor;
  this.color = color;
  this.kilometraje = kilometraje;

  // METODO QUE MUESTRA DESCRIPCION COMPLETA DEL VEHICULO

  this.describe = function () {
    return `🚗 ${this.marca} ${this.modelo} (${this.año}) - Motor: ${this.motor}, Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
  };

 
}

// VARIABLE CONSTANTE QUE ALMACENA EL OBJETO CAR

const myCar = new Car("Subaru", "Impreza", 2020, "Gasolina", "Azul", 45000);

// MUESTRA EN CONSOLA LA INFORMACION DEL VEHICULO

console.log("=== INFORMACIÓN DEL COCHE ===");
console.log(myCar.describe());



