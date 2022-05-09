// eleccion del calculo a realizar
let calculo = prompt(
  "Seleccione el calculo: SUMA, RESTA, MULTIPLICACION, DIVISION, PORCENTAJE, PROMEDIO"
);

calculo = calculo.toLowerCase();

//algoritmo suma
if (calculo === "suma") {
  let numeroUno = Number(prompt("Ingresa un numero"));
  let numeroDos = Number(prompt("Ingresa otro numero"));

  let resultado = numeroUno + numeroDos;
  alert("El resultado es " + resultado);

  let pregunta = prompt(
    "Desea continuar sumando? \n Responda si para continuar o esc para finalizar"
  );
  while (pregunta != "esc") {
    if (pregunta == "si") {
      let numeroTres = Number(prompt("Ingresa otro numero"));
      let resultadodos = resultado + numeroTres;

      alert("El resultado es " + resultadodos);
    }
    let pregunta = prompt(
    "Desea continuar sumando? \n Responda si para continuar o esc para finalizar"
  );
    }
    alert("Muchas gracias por utilizar la calculadora casio de las pulgas");
}
//calculo resta
else if (calculo === "resta") {
  let numA = Number(prompt("Ingresa el primer numero"));
  let numB = Number(prompt("Ingresa el segundo numero"));
  let resC = numA - numA;
  alert("El resultado es " + resC);
}

//calculo producto
else if (operacion === "producto") {
  let a = Number(prompt("Ingresa el primer numero"));
  let b = Number(prompt("Ingresa el otro numero"));
  let c = a * b;
  alert("El resultado es " + c);
}

//calculo division
else if (operacion === "division") {
  let a = Number(prompt("Ingresa el primer numero"));
  let b = Number(prompt("Ingresa el segund numero"));
  if (b === 0) {
    confirm("No se puede dividir por cero");
  } else {
    let c = a / b;
    alert("El resultado es " + c);
  }
}
