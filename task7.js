// =====================================================
// 🚗 Task 7 — Objeto "Car"
// =====================================================

// Función constructora que define un vehículo
function Car(marca, modelo, año, motor, color, kilometraje) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.motor = motor;
  this.color = color;
  this.kilometraje = kilometraje;

  // Método que muestra la descripción completa del coche
  this.describe = function () {
    return `🚗 ${this.marca} ${this.modelo} (${this.año}) - Motor: ${this.motor}, Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
  };

 
}

// Crear una instancia del objeto Car
const myCar = new Car("Subaru", "Impreza", 2020, "Gasolina", "Azul", 45000);

// DESCRIPCION DEL COCHE 
console.log("=== INFORMACIÓN DEL COCHE ===");
console.log(myCar.describe());



