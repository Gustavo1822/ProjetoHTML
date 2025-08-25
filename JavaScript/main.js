/*
function nomes() {
const nome1 = "Maxwell Wright"
const nome2 = "Raja Villarreal"
const nome3 = "Helen Richards"

console.log(nome1);
console.log(nome2);
console.log(nome3);

}

const numero1 = "01917196495";
const numero2 = "08663982895";
const numero3 = "08001111";

const email1 = "Curabitur.egestas.nunc@nonummyac.co.uk"
const email2 = "posuere.vulputate@sed.com"
const email3 = "libero@convallis.edu"

console.log(numero1);

nomes()


print(nomes())

let cellbit = 100
let thegus = 15
let somar
let resultado 

somar = cellbit + thegus

console.log(typeof resultado);
console.log(somar)

*/


function mostrarIdade() {
  let texto = document.getElementById("idades").value;
  console.log("Idade digitada:", texto);



let ano = 2025

let subtrair = ano - parseInt(document.getElementById("idades").value);


if (subtrair >= 18) {
    window.location.href = "pagina2.html"
} else {
    window.location.href = "menordeidade.html"
}

}


function call1 () {
  let numb = parseFloat(document.getElementById("cal1").value);
  let numb2 = parseFloat(document.getElementById("cal2").value);
  
  console.log("Numero 1", numb);
  console.log("Numero 1", numb2);

let resul = numb + numb2;

console.log("resultado da soma", resul);


document.getElementById("resultado").innerText = resul;



}


function call2 () {
  let numb3 = parseFloat(document.getElementById("cal3").value);
  let numb4 = parseFloat(document.getElementById("cal4").value);
  
  console.log("Numero 1", numb3);
  console.log("Numero 2", numb4);

let resul2 = numb3 - numb4;

console.log("resultado da subtração", resul2);


document.getElementById("resultado1").innerText = resul2;



}


























