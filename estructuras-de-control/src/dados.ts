let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "¿Cuántas veces va a tirar?";
let probCara: number = 1 / 6;
let probFinal: number;
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let n: number = Number(dato.value);
  probFinal = 1;
  /*
  for (let contador: number = 1; contador <= n; contador++) {
    probFinal = probFinal * probCara;
  }
  */
  // El ciclo FOR podría reemplazarse por
  probFinal *= probCara ** n;

  console.log("La probabilidad es: ", probFinal);
});
