rotulo.innerHTML = "ingrese un numero";
let dato = document.getElementById("dato");

btnverif.addEventListener("click", () => {
  let dato = document.getElementById("dato");
  let dato: number = Number(dato.value);
  if(dato === 0){
  console.log("el numero ingresado es cero")
})
