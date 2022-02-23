// //codigo html de referencia
// <div id="contenedor"></div>;

// //codigo JS
// let contenedor = document.getElementById("contenedor");

// //cambio el codigo HTML interno
// contenedor.innerHTML = "<h2>Hola mundo</h2><p>Texto de prueba</p>";

// //resultado en el dom
// <div id="contenedor">
//   <h2>Hola mundo</h2>
//   <p>Texto de prueba</p>
// </div>;
// /* Comment */

// //crear nodo de tipo Elemento, etiqueta p
// let parrafo = document.getElementById("parrafo1");
// //eliminando el propio elemento.
// parrafo.remove();

// let paises = document.getElementsByClassName("paises");
// //eliminando el primer elemento de CLASE PAISES.
// paises[0].remove();

// /* Comment */

//creo una clase
class Box {
  //creo un constructor
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }
}
//creo tres boxes con el constructor
const box1 = new Box(1, "uno", 1500, "otra", 10);
const box2 = new Box(2, "dos", 2500, "otra", 20);
const box3 = new Box(3, "tres", 3500, "otra", 30);

//creo un array con las cajas creadas
const arrayCajas = [box1, box2, box3];

//Consulto un HTML vacio que cree para poder ingresar los valores.
let divCajas = document.getElementById("divCajas");

//creo un for each que va a recoorer el arrayCajas por cada uno de los elementos que tenga
//creo el alias cajaenArray, que es una forma de identificar con una palabra cada uno de los elementos de mi array, fuera del forEach no existe.
//utilizamos id como identificador ya que es la unica propiedad que no se repite.
//colocamos += para que muestre todos los elementos, si colocamos solo = muestra el ultimo.
arrayCajas.forEach((cajaenArray) => {
  divCajas.innerHTML += `
  
  <div id= "${cajaenArray.id}" class"acaAgregamosEstilosCSS">
    <p>nombre: ${cajaenArray.nombre} </p>
    <p>precio: ${cajaenArray.precio}</p>
    <p>categoria: ${cajaenArray.categoria}</p>
    <p>stock: ${cajaenArray.stock}</p>
  </div>
  <hr></hr>
  `;
});
