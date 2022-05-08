// Definir las variables
let cantidad: number = Number(prompt("Ingrese la cantidad de números:"));
let v: number[] = new Array(cantidad);
let indice: number;
// Cargar el arreglo
for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt(`Ingrese v[ ${indice} ]: `));
}
// Mostrar al revés
let cadena: string = "";
for (indice = cantidad - 1; indice >= 0; indice--) {
  cadena += v[indice] + " ";
}
console.log(cadena);
