let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "¿La tabla de qué número desea?";
rotulo2.innerHTML = "¿Hasta qué número multiplica?";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numTabla: number = Number(dato1.value);
  let limiteTabla: number = Number(dato2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= limiteTabla; contador++) {
    resultado = numTabla * contador;
    console.log(numTabla + " x " + contador + " = " + resultado);
  }
});
