// variables
const cells = document.querySelectorAll(".cell");

const resetBtn = document.querySelector(".reset");

const red = document.querySelector(".red")
const orange = document.querySelector(".orange")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const purple = document.querySelector(".purple")
const black = document.querySelector(".black")
const white = document.querySelector(".white")
const brown = document.querySelector(".brown")

// events
cells.forEach(function attachOnClick(cell){
  cell.addEventListener("click",changeColor);
});

resetBtn.addEventListener('click', reset);

red.addEventListener('click', redClick);
orange.addEventListener('click', orangeClick);
yellow.addEventListener('click', yellowClick);
green.addEventListener('click', greenClick);
blue.addEventListener('click', blueClick);
purple.addEventListener('click', purpleClick);
black.addEventListener('click', blackClick);
white.addEventListener('click', whiteClick);
brown.addEventListener('click',brownClick);

// functions
function changeColor(event) {
    const element = event.target;
    element.style.backgroundColor = color;
}

function reset(event) {
    cells.forEach(function resetCell(cell){
    cell.style.backgroundColor = "";
    });
}
function redClick(event) {
    color = "red"
}
function orangeClick(event) {
    color = "orange"
}
function yellowClick(event) {
    color = "yellow"
}
function greenClick(event) {
    color = "green"
}
function blueClick(event) {
    color = "blue"
}
function purpleClick(event) {
    color = "purple"
}
function blackClick(event) {
    color = "black"
}
function whiteClick(event) {
    color = "white"
}
function brownClick(event) {
    color = "brown"
}
// kick it off