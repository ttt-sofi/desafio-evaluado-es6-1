// main.js

import Cliente from "./Cliente.js"; // Importar la clase Cliente
import Impuesto from "./Impuesto.js"; // Importar la clase Impuesto

// Crear una instancia de la clase Impuesto
const impuesto = new Impuesto(100000, 20000); // montoBrutoAnual = 100000, deducciones = 20000

// Crear una instancia de la clase Cliente
const cliente = new Cliente("Juan", impuesto);

// Calcular el impuesto
console.log(`El impuesto a pagar es: ${cliente.calcularImpuesto()}`); // El impuesto a pagar es: 16800
console.log(cliente.getClienteNombre()); // Juan
