// variables
const cells = document.querySelectorAll(".cell");

// events
cells.forEach(function attachOnClick(cell){
  cell.addEventListener("click",changeColor);
});

// functions
function changeColor(event){
    const element = event.target;
    element.style.backgroundColor = "black";
}

// kick it off