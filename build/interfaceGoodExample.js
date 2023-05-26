"use strict";
class carG {
    constructor(electrico, marca, tipo, modelo, neumaticos, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.puertas = puertas;
        this.electrico = electrico;
    }
}
class motoG {
    constructor(electrico, marca, modelo, neumaticos) {
        this.marca = marca;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.electrico = electrico;
    }
}
class biciG {
    constructor(electrico, marca, modelo, neumaticos) {
        this.marca = marca;
        this.modelo = modelo;
        this.electrico = electrico;
        this.neumaticos = neumaticos;
    }
}
const vehicule1 = new motoG(false, "honda", 2003, 2);
console.log(vehicule1);
