function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Indique el número a verificar: ";
rotulo2.innerHTML = "Indique el número cuyo múltiplo sería el anterior: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let mensaje: string = "El número " + numero1;
  if (!esMultiplo(numero1, numero2)) {
    mensaje += " NO";
  }
  console.log(mensaje + " es múltiplo de " + numero2);
});
