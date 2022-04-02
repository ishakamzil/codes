let input = document.getElementById("Tent");
let play = document.getElementById("play");
let remov = document.getElementById("remov");
let output = document.getElementById("output");

play.onclick = function () {
 output.innerHTML = input.value;
 window.localStorage.setItem("input", input.value)
}
remov.onclick = function () {
 output.innerHTML = "";
 input.innerHTML = "";

}
window.onload = function () {
   input.value = localStorage.getItem("input")
}