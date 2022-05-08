let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese el monto: ";
rotulo2.innerHTML = "Ingrese la cantidad: ";
rotulo3.innerHTML = "Ingrese el mes: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let monto: number = Number(dato1.value);
  let cantidad: number = Number(dato2.value);
  let mes: number = Number(dato3.value);

  let precioTotal: number = monto * cantidad;
  if (mes === 10) {
    let descuento: number = (precioTotal * 15) / 100;
    precioTotal -= descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento."
    );
  } else {
    console.log("Ud. no tiene descuento.");
  }
  console.log("El precio total es ", precioTotal);
});
