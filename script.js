// GETTING ELEMENTS FROM DOM
let color1 = document.querySelector('.color-inputs .color1');
let color2 = document.querySelector('.color-inputs .color2');
const cssText = document.querySelector('header .code');
const gradient = document.querySelector('.gradient');
const randBtn = document.querySelector('.random-btn');
const body = document.body;
let gShape = 'linear'; 
let gDirection = 'to right';

// EVENT LISTENERS
color1.addEventListener('input', changeColorInputs);
color2.addEventListener('input', changeColorInputs);
gradient.addEventListener('click', setGradient);
randBtn.addEventListener('click', randomColor);

// FUNCTIONS
function changeColorInputs(){
    body.style = `background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`;
    updateBgText();

}

function updateBgText(){
    const bg = document.body.style.backgroundImage;
    cssText.innerText = 'background-image: ' + bg +';';
}

function setGradient(e){
    gShape = e.target.parentElement.className;
    gDirection = e.target.value;
    console.log(gShape, gDirection, color1.value, color2.value);
    body.style= `background-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText();
};


function randomColor(){
    color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(color1, color2);
    body.style = `background-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText(); 
};

