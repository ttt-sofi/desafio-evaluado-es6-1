// Impuesto.js

class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  // Getters
  getMontoBrutoAnual() {
    return this.montoBrutoAnual;
  }

  getDeducciones() {
    return this.deducciones;
  }

  // Setters
  setMontoBrutoAnual(nuevoMontoBrutoAnual) {
    this.montoBrutoAnual = nuevoMontoBrutoAnual;
  }

  setDeducciones(nuevasDeducciones) {
    this.deducciones = nuevasDeducciones;
  }
}

// Exportar la clase Impuesto
export default Impuesto;
