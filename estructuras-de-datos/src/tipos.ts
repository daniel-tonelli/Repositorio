// Defino las variables y cargo los valores
let cantidad: number = Number(prompt(`Ingrese la cantidad de números: `));
let v: number[] = new Array(cantidad);
let indice: number;
for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt(`Ingrese v[ ${indice} ]: `));
}
//Cuento los valores >0, <0 e =0
let numNeg: number = 0;
let numCero: number = 0;
let numPos: number = 0;

// Recorro el arreglo y voy contando
for (indice = 0; indice < cantidad; indice++) {
  if (v[indice] == 0) {
    numCero++;
  } else if (v[indice] > 0) {
    numPos++;
  } else {
    numNeg++;
  }
}

console.log(
  `Hay ${numPos} positivo/s, ${numNeg} negativo/s y ${numCero} cero/s.`
);
