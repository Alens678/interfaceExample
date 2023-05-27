// const crearVehiculo = (tipo, marca, modelo, neumaticos, puertas, electrico) => {

// }
const validarEsNum = (campo) => {
  entrada = document.getElementById(campo).value;
  if (isNaN(entrada) === true) {
    alert("El número de neumáticos debe ser numérico");
  }
};


//FUNCION QUE CAMBIA LA CLASE DEL FORMULARIO, colores segun tipo vehiculo
let tipo = "coche"
document.getElementById("formulario").classList = tipo;

const cambiarClase = (tipo) => {
document.getElementById("formulario").classList = tipo;

  if (tipo === "coche") {
    document.getElementById("puertas-input").className = "mostrar";
    document.getElementById("neumaticos-input").value = 4;
  } else {
     document.getElementById("puertas-input").className = "ocultar";
     document.getElementById("neumaticos-input").value = 2;
  }
}; 



//BOTONES I ADDLISTENERS
document.getElementById("coche-btn").addEventListener("click", () => {
  cambiarClase("coche");
});
document.getElementById("moto-btn").addEventListener("click", () => {
  cambiarClase("moto");
});
document.getElementById("bici-btn").addEventListener("click", () => {
  cambiarClase("bici");
});
