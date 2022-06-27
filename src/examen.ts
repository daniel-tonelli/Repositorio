let ventas1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let ventas2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let ventas3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let ventas4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let ventas5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

let meses: string[] = ["enero", "febrero", "marzo"];
//                           0        1         2        3          4
let nombres: string[] = ["Camila", "Franco", "Sofía", "Matías", "Agustina"];
let ventas: number[][] = [ventas1, ventas2, ventas3, ventas4, ventas5];
//                           0        1        2        3        4

function buscarPosicionVenta(ventaN: number[], maxMin: number): number {
  let venta: number = ventaN[0]; // valor de venta de la 1ª semana
  let posicion: number = 0; // posición correspondiente a la 1ª semana
  for (let semana: number = 1; semana < 12; semana++) {
    if (
      (maxMin === 1 && ventaN[semana] > venta) ||
      (maxMin === 2 && ventaN[semana] < venta)
    ) {
      venta = ventaN[semana];
      posicion = semana;
    }
  }
  return posicion;
}
function mostrarVenta(maxMin: number) {
  for (let i: number = 0; i < ventas.length; i++) {
    let indice: number = buscarPosicionVenta(ventas[i], maxMin); // 1-Máxima, 2-Mínima
    let mes: number = 0;
    let semana: number = indice;
    while (semana > 3) {
      mes++;
      semana -= 4;
    }
    semana++;
    let msg: string = "La venta ";
    msg += maxMin === 1 ? "máxima" : "mínima";
    msg += " de ";
    msg += nombres[i];
    msg += " es de $";
    msg += ventas[i][indice];
    msg += " y corresponde a la ";
    msg += semana;
    msg += "ª semana del mes de ";
    msg += meses[mes];
    console.log(msg);
  }
}
/*
Para cada vendedor mostrar su nombre y 
1- su venta máxima indicando semana y mes de la misma.
2- su venta mínima indicando semana y mes de la misma.
*/
mostrarVenta(1);
mostrarVenta(2);
/*
Para cada vendedor mostrar su nombre y 
3- su promedio trimestral de ventas.
4- su promedio mensual de ventas.
*/
function mostrarPromedioVenta() {
  for (let i: number = 0; i < nombres.length; i++) {
    let sumaVentaTrimestral: number = 0;
    let msg: string = "";
    for (let j: number = 0; j < 3; j++) {
      let sumaVentaMensual: number = 0;
      for (let k: number = 0; k < 4; k++) {
        sumaVentaMensual += ventas[i][k + j * 4];
      }
      msg = "El promedio de venta correspondiente al mes de ";
      msg += meses[j];
      msg += " de ";
      msg += nombres[i];
      msg += " es de $" + Math.round(sumaVentaMensual / 4);
      console.log(msg);
      sumaVentaTrimestral += sumaVentaMensual;
    }
    msg = "El promedio de venta correspondiente al trimestre, de ";
    msg += nombres[i];
    msg += " es de $" + Math.round(sumaVentaTrimestral / 12);
    console.log(msg);
  }
}
mostrarPromedioVenta();
/*
Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre
*/
function mostrarMontosVendidos() {
  let sumaVentasMensuales: number[] = new Array(5 * 3); // acumulo las ventas mensuales para cada vendedor
  let sumaVentasTrimestrales: number[] = new Array(5); // acumulo las ventas trimestrales para cada vendedor
  let mejorVentaSemanal: number[] = new Array(12); // guardo en cada semana la mejor venta
  let mejorVendedorSemanal: string[] = new Array(12); // nombre del mejor vendedor para cada semana
  let mejorVentaMensual: number[] = new Array(3); // guardo en cada mes la mejor venta
  let mejorVendedorMensual: string[] = new Array(3); // nombre del mejor vendedor para cada mes
  let peorVentaMensual: number[] = new Array(3); // guardo en cada mes la peor venta
  let peorVendedorMensual: string[] = new Array(3); // nombre del peor vendedor para cada mes
  let peorVentaTrimestral: number = Infinity; // guardo la peor venta trimestral
  let peorVendedorTrimestral: string = nombres[0]; // nombre del peor vendedor trimestral
  for (let i: number = 0; i < nombres.length; i++) {
    sumaVentasTrimestrales[i] = 0;
    for (let j: number = 0; j < 3; j++) {
      sumaVentasMensuales[i * 3 + j] = 0;
      for (let k: number = 0; k < 4; k++) {
        if (i === 0) {
          mejorVentaSemanal[j * 4 + k] = ventas[i][j * 4 + k];
          mejorVendedorSemanal[j * 4 + k] = nombres[i];
        } else if (mejorVentaSemanal[j * 4 + k] < ventas[i][j * 4 + k]) {
          mejorVentaSemanal[j * 4 + k] = ventas[i][j * 4 + k];
          mejorVendedorSemanal[j * 4 + k] = nombres[i];
        }
        sumaVentasMensuales[i * 3 + j] += ventas[i][j * 4 + k];
      }
      if (i === 0) {
        mejorVentaMensual[j] = sumaVentasMensuales[j];
        mejorVendedorMensual[j] = nombres[i];
        peorVentaMensual[j] = sumaVentasMensuales[j];
        peorVendedorMensual[j] = nombres[i];
      } else if (mejorVentaMensual[j] < sumaVentasMensuales[i * 3 + j]) {
        mejorVentaMensual[j] = sumaVentasMensuales[i * 3 + j];
        mejorVendedorMensual[j] = nombres[i];
      } else if (peorVentaMensual[j] > sumaVentasMensuales[i * 3 + j]) {
        peorVentaMensual[j] = sumaVentasMensuales[i * 3 + j];
        peorVendedorMensual[j] = nombres[i];
      }
      sumaVentasTrimestrales[i] += sumaVentasMensuales[i * 3 + j];
    }
    if (i === 0) {
      peorVendedorTrimestral = nombres[i];
      peorVentaTrimestral = sumaVentasTrimestrales[i];
    } else if (peorVentaTrimestral > sumaVentasTrimestrales[i]) {
      peorVendedorTrimestral = nombres[i];
      peorVentaTrimestral = sumaVentasTrimestrales[i];
    }
  }
  let msg: string = "El mejor vendedor de cada semana es: ";
  console.log(msg);
  for (let i: number = 0; i < 12; i++) {
    let semana: number = i + 1;
    let mes: number = 0;
    while (semana > 4) {
      semana -= 4;
      mes++;
    }
    msg = mejorVendedorSemanal[i];
    msg += " con $" + mejorVentaSemanal[i];
    msg += " correspondiente a la " + semana + "ª semana de " + meses[mes];
    console.log(msg);
  }
  msg = "El mejor vendedor de cada mes es: ";
  console.log(msg);
  for (let mes: number = 0; mes < 3; mes++) {
    msg = mejorVendedorMensual[mes];
    msg += " con $" + mejorVentaMensual[mes];
    msg += " correspondiente al mes de " + meses[mes];
    console.log(msg);
  }
  msg = "El peor vendedor de cada mes es: ";
  console.log(msg);
  for (let mes: number = 0; mes < 3; mes++) {
    msg = peorVendedorMensual[mes];
    msg += " con $" + peorVentaMensual[mes];
    msg += " correspondiente al mes de " + meses[mes];
    console.log(msg);
  }
  msg = "El peor vendedor trimestral es ";
  msg += peorVendedorTrimestral;
  msg += " con una venta de $" + peorVentaTrimestral;
  console.log(msg);
}
mostrarMontosVendidos();
