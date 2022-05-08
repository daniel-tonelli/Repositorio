let rotulo = document.getElementById("rotulo");
/*
 Busca un Elemento HTML con el id que tiene el valor "rotulo" y
 asigna ese Elemento HTML a una variable cuyo nombre de variable elegí sea "rotulo"
 (podría ser cualquier otro nombre de variable)
 El Elemento HTML en particular es un contenedor de párrafo: <p>
*/
rotulo.innerHTML = "Ingrese el número: ";
/*
 Carga el HTML "Ingrese el número: " dentro del contenedor
 referenciado con la variable de nombre "rotulo"
*/
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
