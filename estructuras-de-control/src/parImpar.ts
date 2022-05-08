let numIngresado = Number(prompt("Ingrese un número"));
while (numIngresado <= 0) {
  numIngresado = Number(prompt("Ingrese otro número (positivo)"));
}
if (numIngresado % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
