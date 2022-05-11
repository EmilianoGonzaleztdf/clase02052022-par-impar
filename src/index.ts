rotulo1.innerHTML = "ingrese un numero a verificar";

let numero1 = document.getElementById("dato1");

btn1.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  if (numero1 == 0) {
    console.log("El " + numero1 + " no es par ni impar");
  } else if (numero1 % 2 == 0) {
    console.log("El " + numero1 + " es par");
  } else {
    console.log("El " + numero1 + " es impar");
  }
});
