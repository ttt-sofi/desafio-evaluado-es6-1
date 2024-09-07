// Cliente.js

import Impuesto from "./Impuesto.js"; // Importar la clase Impuesto

class Cliente {
  constructor(ClienteNombre, Impuesto) {
    this.ClienteNombre = ClienteNombre;
    this.Impuesto = Impuesto; // La propiedad Impuesto es un objeto de la clase Impuesto
  }

  // Getters
  getClienteNombre() {
    return this.ClienteNombre;
  }

  // Setters
  setClienteNombre(NuevoClienteNombre) {
    this.ClienteNombre = NuevoClienteNombre;
  }

  // Método para calcular el impuesto
  calcularImpuesto() {
    const montoBrutoAnual = this.Impuesto.getMontoBrutoAnual();
    const deducciones = this.Impuesto.getDeducciones();
    const impuestoCalculado = (montoBrutoAnual - deducciones) * 0.21; // Fórmula
    return impuestoCalculado;
  }
}

// Exportar la clase Cliente
export default Cliente;
