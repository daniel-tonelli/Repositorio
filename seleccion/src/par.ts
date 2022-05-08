let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Ingrese el número: ";

let dato = document.getElementById("dato");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero: number = Number(dato.value);
  let resultado: string = "no es par ni impar.";
  if (numero > 0) {
    resultado = "es ";
    if (numero % 2 > 0) {
      resultado += "im";
    }
    resultado += "par";
  }

  console.log("El número " + numero + " " + resultado + ".");
});
