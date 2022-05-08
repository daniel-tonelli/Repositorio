let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");
rotulo.innerHTML = "Ingrese el salario actual del empleado: ";

let nuevoSueldo: number = 0;

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let sueldoActual: number = Number(dato.value);
  if (0 < sueldoActual && sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Ud. tiene un aumento de 20%. Nuevo Sueldo: $" + nuevoSueldo);
  } else if (15001 < sueldoActual && sueldoActual <= 20000) {
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Ud. tiene un aumento de 10%. Nuevo Sueldo: $" + nuevoSueldo);
  } else if (20001 < sueldoActual && sueldoActual <= 25000) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Ud. tiene un aumento de 5%. Nuevo Sueldo: $" + nuevoSueldo);
  } else {
    nuevoSueldo = sueldoActual;
    console.log("Ud. no tiene aumento");
  }
});
