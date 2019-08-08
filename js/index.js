// Your code goes here
let nav = document.querySelector("nav");

//Mouseover and Mouseout
nav.addEventListener("mouseover", function(event) {   
    event.target.style.color = "blue";
});

nav.addEventListener("mouseout", function(event) {   
    event.target.style.color = "black";
});

//Resize
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//Copy
let p = document.querySelector("nav");

p.addEventListener("copy", (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
    event.preventDefault();
});

//Select
function logSelection(event) {
    const log = document.getElementById("log");
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You highlighted: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);

//Pointermove
const para = document.querySelector("h2");

para.addEventListener("pointermove", (event) => {
    let newP = document.getElementById("move");
    newP.textContent = `you touched the top heading!`
});

const image = document.querySelector("img");

//dblclick
image.addEventListener("dblclick", function (e) {
    image.style.width = "500px";
});

//blur and focus
const form = document.getElementById("sign");

form.addEventListener("focus", (event) => {
  event.target.style.borderColor = "red";    
}, true);

form.addEventListener("blur", (event) => {
  event.target.style.borderColor = "red";    
}, true);

