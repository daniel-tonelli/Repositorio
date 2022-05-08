let conIngresos: boolean = false;
let num = Number(prompt("Ingrese un número"));
//let minNum: number = num;
let maxNum: number = num;
while (num !== 0) {
  conIngresos = true;
  //if (num < minNum) {
  if (num > maxNum) {
    //minNum = num;
    maxNum = num;
  }
  num = Number(prompt("Ingrese un número"));
}
if (conIngresos) {
  //console.log(“El mínimo es “,minNum);
  console.log("El máximo es ", maxNum);
}
