// GETTING ELEMENTS FROM DOM
const color1 = document.querySelector('.color-inputs .color1');
const color2 = document.querySelector('.color-inputs .color2');
const cssText = document.querySelector('header .code');
const gradient = document.querySelector('.gradient');
const randBtn = document.querySelector('.random-btn');
const body = document.body;

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
    const gShape = e.target.parentElement.className;
    const gDirection = e.target.value;
    body.style= `background-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText();
};


function randomColor(){
    const color1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    const color2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    body.style = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
    updateBgText(); 
};

