let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let primerNumero: number = Number(dato1.value);
  let segundoNumero: number = Number(dato2.value);

  let actual, suma, aux: number;
  actual = primerNumero;
  if (primerNumero > segundoNumero) {
    aux = primerNumero;
    primerNumero = segundoNumero;
    segundoNumero = aux;
  }
  suma = 0;
  for (actual = primerNumero; actual <= segundoNumero; actual++) {
    suma += actual;
  }
  console.log("El resultado de la suma es " + suma);
});
