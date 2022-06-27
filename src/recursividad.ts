function imprimirArregloRec(
  arreglo: number[],
  desde: number,
  hasta: number
): number {
  if (desde <= hasta) {
    console.log(
      `La posición ${desde} tiene: ${imprimirArregloRec(
        arreglo,
        desde + 1,
        hasta
      )}`
    );
  }
  return arreglo[desde - 1];
}
//  POSICION:          0  1  2   3  4  5  6  7  8  9
let notas: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
imprimirArregloRec(notas, 0, 9);
