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
const box1 = new Box(1, "Box Kids", 1500, "Cumpleaños", 10);
const box2 = new Box(2, "Box Spa", 2500, "Relax", 20);
const box3 = new Box(3, "Box fiesta", 3500, "Cumpleaños", 30);

//creo un array con las cajas creadas
const arrayCajas = [box1, box2, box3];

//Consulto un HTML vacio que cree para poder ingresar los valores.
let divCajas = document.getElementById("divCajas");

//creo un for each que va a recoorer el arrayCajas por cada uno de los elementos que tenga
//creo el alias cajaenArray, que es una forma de identificar con una palabra cada uno de los elementos de mi array, fuera del forEach no existe.
//utilizamos id como identificador ya que es la unica propiedad que no se repite.
//colocamos += para que muestre todos los elementos, si colocamos solo = muestra el ultimo.

let formEnvio = document.getElementById("idForm");

formEnvio.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombreForm = document.getElementById("nombreForm");
  let apellidoForm = document.getElementById("apellidoForm");
  let direccionForm = document.getElementById("direccionForm");
  let phoneForm = document.getElementById("phoneForm");
  let emailForm = document.getElementById("emailForm");

  divEnvio.innerHTML = `
    <div class="m-5">
      <div>
        <h3>Hola ${nombreForm.value} ${apellidoForm.value}</h3>
      </div>
      <div>
        <p>Tus productos seran enviados a la direccion: ${direccionForm.value}</p>
        <p>Te estaremos avisando al estatus del envio al correo ${emailForm.value} o al telefono ${phoneForm.value}</p>
      </div>
    
    </div>

`;
});

arrayCajas.forEach((cajaenArray) => {
  divCajas.innerHTML += `
  <div class="card m-3" style="width: 18rem;">
    <div class="card-body ">
      <h5 class="card-title">Nombre: ${cajaenArray.nombre} </h5>
      <p class="card-text">Precio: ${cajaenArray.precio}</p>
      <p class="card-text">Categoria: ${cajaenArray.categoria}</p>
      <p class="card-text">Stock: ${cajaenArray.stock}</p>
      <a href="#" class="btn btn-primary text-center">Comprar</a>
    </div>
  </div>`;
});
