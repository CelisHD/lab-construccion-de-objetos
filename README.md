
# 🚀 Proyecto: Laboratorio - Construccion de Objetos

### 1. Repositorio
  
Este repositorio contiene las distintas tareas desarrolladas durante el laboratorio, cada una ubicada en su respectivo archivo `task.js`.

---

### 2. Explicación corta de cada tarea

| Tarea | Descripción breve |
|-------|--------------------|
| **Task 1 — Constructor básico** | Se utiliza una función constructora `Mail` para crear un objeto con las propiedades `subject` y `message`. Se inicializan con los valores fijos `"hello"` y `"world"`. |
| **Task 2 — Constructor con datos dinámicos** | Se amplía el constructor `Mail` para recibir los valores de `subject` y `message` desde la línea de comandos usando `process.argv`. Permite generar instancias con datos ingresados por el usuario. |
| **Task 3 — Constructor con método** | Se agrega al constructor `Mail` un método `printMail()` que muestra el contenido en el formato `<asunto>: <mensaje>` utilizando `console.log()`. |
| **Task 4 — Constructor personalizado** | Se crea el constructor `Journey` con propiedades `start` y `end`, representando un viaje. Se imprime un mensaje indicando el trayecto: “Booking a taxi from <start> to <end>”. |
| **Task 5 — Lista de amigos** | Se define un constructor `FriendsList` que almacena nombres en un arreglo. El usuario indica cuántos nombres ingresará y luego se muestra la lista completa en consola. |
| **Task 6 — Lista de compras** | Se implementa un constructor `ShoppingList` para registrar artículos y cantidades. El objetivo es manejar entradas repetidas y mostrar un resumen general de la lista. |
| **Task 7 — Objeto “Coche”** | Se construye el objeto `Car` mediante una función constructora con propiedades como marca, modelo, año, motor, color y kilometraje. Incluye un método `describe()` que muestra la descripción completa del vehículo. |



---

### 3. Uso de `this`, constructores y `new`

- ##### **`this`**: hace referencia al objeto que se está creando o utilizando. Dentro del constructor `Car`, permite asignar los valores de los parámetros a las propiedades del nuevo objeto.  
  ```js
  this.marca = marca;
  this.modelo = modelo;
    ```


- Constructor (function Car(...)): sirve como molde para crear múltiples objetos con la misma estructura, evitando repetir código.

- ##### **`new`**: palabra clave que crea una nueva instancia del objeto basado en el constructor, ejecutando su función interna y asignando el contexto de this.

    ```js
    const myCar = new Car("Subaru", "Impreza", 2020, "Gasolina", "Azul", 45000);
    ```

---


## 🧠 Reflexión final

#### ⏩ ¿Qué diferencia hay entre usar objetos literales y funciones constructoras?

Los objetos literales son ideales para representar una sola entidad fija, mientras que las funciones constructoras permiten crear múltiples instancias de un mismo tipo de objeto, reutilizando estructura y lógica.

 #### ⏩ ¿Cómo ayuda this dentro de un constructor?

**this** actúa como un enlace al objeto que se está creando. Gracias a él, cada instancia puede tener sus propias propiedades y valores independientes.

 #### ⏩ ¿Qué similitudes encuentras con las clases de otros lenguajes?

Las funciones constructoras en JavaScript son muy similares a las clases de lenguajes como Java o C#:

- Tienen un constructor que inicializa propiedades.

- Permiten definir métodos que pueden ser compartidos por todas las instancias.

- Se utilizan con la palabra clave new para crear objetos.
