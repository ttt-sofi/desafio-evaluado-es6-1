"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuesto = _interopRequireDefault(require("./Impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// main.js

// Importar la clase Cliente
// Importar la clase Impuesto

// Crear una instancia de la clase Impuesto
var impuesto = new _Impuesto["default"](100000, 20000); // montoBrutoAnual = 100000, deducciones = 20000

// Crear una instancia de la clase Cliente
var cliente = new _Cliente["default"]('Juan', impuesto);

// Calcular el impuesto
console.log("El impuesto a pagar es: ".concat(cliente.calcularImpuesto())); // El impuesto a pagar es: 16800
console.log(cliente.getClienteNombre()); // Juan