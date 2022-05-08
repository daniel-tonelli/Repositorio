let min, max, sum, num, avg, count: number;
num = Number(prompt("Ingrese un número (0 para cortar)"));
count = 0;
sum = 0;
avg = 0;

min = num;
max = num;

while (num !== 0) {
  if (num < min) {
    min = num;
  } else if (num > max) {
    max = num;
  }
  sum += num;
  count++;
  num = Number(prompt("Ingrese un número (0 para cortar)"));
}
if (count > 0) {
  avg = sum / count;
  console.log("El mínimo es: ", min);
  console.log("El máximo es: ", max);
  console.log("El promedio es: ", avg);
} else {
  console.log("¡No ingreso ningún número!");
}
