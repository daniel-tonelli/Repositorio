function potenciaNumero1(base: number, exponente: number): number {
  let numero: number = 1;
  if (exponente == 0) {
    return 1;
  } else {
    for (let i = 1; i <= exponente; i++) {
      numero = numero * base;
    }
    return numero;
  }
}
function potenciaNumero2(base: number, exponente: number): number {
  return Math.pow(base, exponente);
}
function potenciaNumero3(base: number, exponente: number): number {
  return base ** exponente;
}

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "ingrese Base: ";
rotulo2.innerHTML = "ingrese Exponente: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let exponente: number = Number(dato2.value);
  console.log("La potencia es = " + potenciaNumero1(base, exponente));
  console.log("La potencia es = " + potenciaNumero2(base, exponente));
  console.log("La potencia es = " + potenciaNumero3(base, exponente));
});
