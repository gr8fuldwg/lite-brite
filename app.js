// variables
const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector(".reset");

// events
cells.forEach(function attachOnClick(cell){
  cell.addEventListener("click",changeColor);
});


resetBtn.addEventListener("click", reset);


// functions
function changeColor(event){
    const element = event.target;
    element.style.backgroundColor = "black";
}

function reset(event){
    cells.forEach(function resetCell(cell))
    
}
// kick it off