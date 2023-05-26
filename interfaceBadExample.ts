interface vehicule{
    marca:string;
    tipo:string;
    modelo:number;
    neumaticos:number;
    puertas:number; 
}  

class car implements vehicule{
    marca:string;
    tipo:string;
    modelo:number;
    neumaticos:number;
    puertas:number;

    constructor (marca:string, tipo:string, modelo:number,neumaticos:number,puertas:number){
        this.marca = marca;
        this.tipo = tipo;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.puertas = puertas;
    }

}

class moto implements vehicule{
    marca:string;
    tipo:string;
    modelo:number;
    neumaticos:number;
    puertas:number;

    constructor (marca:string, tipo:string, modelo:number,neumaticos:number,puertas:number){
        this.marca = marca;
        this.tipo = tipo;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.puertas = puertas;
    }

}

class bici implements vehicule{
    marca:string;
    tipo:string;
    modelo:number;
    neumaticos:number;
    puertas:number;

    constructor (marca:string, tipo:string, modelo:number,neumaticos:number,puertas:number){
        this.marca = marca;
        this.tipo = tipo;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.puertas = puertas;
    }

}