const grid_element = document.createElement("div");
grid_element.classList.add("element")
const grid_container = document.querySelector(".grid_container");

function changeColor(event){
    event.target.style.backgroundColor = "pink";
};

for (let i = 0; i < 16 * 16 ; i++) {
    grid_container.appendChild(grid_element.cloneNode(true)); 
}

let gridArray = document.querySelectorAll(".element");

for(let i = 0; i < 16 * 16; i++){
    gridArray[i].addEventListener("mouseover", changeColor);
}
let grid_border_size = 16;
const reset_data = document.querySelector(".grid_reset_data");
function resetGrid(){
    for(let i = 0; i < grid_border_size  * grid_border_size; i++){
        gridArray[i].remove();
    }
    grid_border_size = reset_data.value;
    grid_element.style.height = (960/grid_border_size) + "px";
    grid_element.style.width = (960/grid_border_size) + "px";
    for (let i = 0; i < grid_border_size * grid_border_size; i++) {
        grid_container.appendChild(grid_element.cloneNode(true)); 
    }
    gridArray = document.querySelectorAll(".element");
    for(let i = 0; i < grid_border_size * grid_border_size; i++){
        gridArray[i].addEventListener("mouseover", changeColor);
    }
}
const reset_button = document.querySelector(".reset_button");
reset_button.addEventListener("click", resetGrid);
