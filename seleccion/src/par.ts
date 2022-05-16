let miRotulo = document.getElementById("rotulo");
/*
 Busca un Elemento HTML con el id que tiene el valor "rotulo" y
 asigna ese Elemento HTML a una variable cuyo nombre de variable elegí sea "miRotulo"
 (podría ser cualquier otro nombre de variable)
 El Elemento HTML en particular es un contenedor de párrafo: <p>
*/
miRotulo.innerHTML = "Ingrese el número:";
/*
 Carga el HTML "Ingrese el número: " dentro del contenedor
 referenciado con la variable de nombre "rotulo"
*/
let miDato = document.getElementById("dato");

let miBoton = document.getElementById("btnEnviar");

miBoton.addEventListener("click", () => {
  let numero: number = Number(miDato.value);
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
