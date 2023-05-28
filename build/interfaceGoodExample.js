"use strict";
class carG {
    constructor(electrico, marca, modelo, neumaticos, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.neumaticos = 4;
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
const vehicule2 = new biciG(false, "mtb", 2020, 2);
const vehicule3 = new carG(true, "volkswagen", 2023, 4, 5);
const vehicule4 = new carG(false, "Homda", 2019, 4, 5);
console.log(vehicule1);
console.log(vehicule2);
console.log(vehicule3);
console.log(vehicule4);
