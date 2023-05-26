interface vehiculeG{
    marca:string;
    modelo:number;
    neumaticos:number;
    electrico:boolean; 
}  

class carG implements vehiculeG{
    marca:string;
    modelo:number;
    neumaticos:number;
    puertas:number;
    electrico: boolean;


    constructor (electrico:boolean,marca:string, tipo:string, modelo:number,neumaticos:number,puertas:number){
        this.marca = marca;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.puertas = puertas;
        this.electrico =electrico;
    }

}

class motoG implements vehiculeG{
    marca:string;
    modelo:number;
    neumaticos:number;
    electrico: boolean;

    constructor (electrico:boolean,marca:string, modelo:number,neumaticos:number){
        this.marca = marca;
        this.modelo = modelo;
        this.neumaticos = neumaticos;
        this.electrico =electrico;
    }
    
}

class biciG implements vehiculeG{
    marca:string;
    modelo:number;
    neumaticos:number;
    electrico: boolean;
   
    constructor (electrico:boolean,marca:string,modelo:number,neumaticos:number){
        this.marca = marca;
        this.modelo = modelo;
        this.electrico =electrico;
        this.neumaticos = neumaticos;
    
    }

}

const vehicule1 = new motoG(false,"honda",2003,2)

console.log(vehicule1)