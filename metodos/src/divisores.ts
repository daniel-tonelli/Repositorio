function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}
function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor < numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Indique un número: ";

let dato = document.getElementById("dato");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero: number = Number(dato.value);
  let numDivisores: number = cantidadDeDivisores(numero);
  console.log("El número " + numero + " tiene " + numDivisores + " divisores.");
});
