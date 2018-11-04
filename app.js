// variables
const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector(".reset");
// const controls = document.querySelector('.controls');
// let resetBtn = controls.querySelector('button');

// events
cells.forEach(function attachOnClick(cell){
  cell.addEventListener("click",changeColor);
});

resetBtn.addEventListener('click', reset);


// functions
function changeColor(event){
    const element = event.target;
    element.style.backgroundColor = "white";
}

function reset(event){
    cells.forEach(function resetCell(cell) {
    cell.style.backgroundColor = "";
    });
}

// kick it off