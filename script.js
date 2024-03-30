const grid_element = document.createElement("div");
const grid_container = document.querySelector(".grid_container");

grid_container.style.backgroundColor = "red";
grid_container.style.height = "960px";
grid_container.style.width = "960px";
grid_container.style.display = "flex";
grid_container.style.flexWrap = "wrap";

grid_element.style.height = "60px";
grid_element.style.width = "60px";
grid_element.style.backgroundColor = "blue";
grid_element.style.flexGrow = "0";
grid_element.style.flexShrink = "0";
grid_element.style.flexBasis = "auto";

for (let i = 0; i < 16 * 16 ; i++) {
    grid_container.appendChild(grid_element.cloneNode(true)); 
    console.log(i);
}
