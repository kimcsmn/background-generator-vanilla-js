// GETTING ELEMENTS FROM DOM
let color1 = document.querySelector('.color-inputs .color1');
let color2 = document.querySelector('.color-inputs .color2');
const cssText = document.querySelector('header .code');
const gradient = document.querySelector('.gradient');
const randBtn = document.querySelector('.random-btn');
const copyBtn = document.querySelector('.copy-btn');
const body = document.body;
let gShape = 'linear'; 
let gDirection = 'to bottom';

// EVENT LISTENERS
color1.addEventListener('input', changeColorInputs);
color2.addEventListener('input', changeColorInputs);
gradient.addEventListener('click', setGradient);
randBtn.addEventListener('click', randomColor);
copyBtn.addEventListener('click', copyCSS);

// FUNCTIONS
function changeColorInputs(){
    body.style = `background-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText();

}

function updateBgText(){
    const bg = document.body.style.backgroundImage;
    cssText.innerText = 'background-image: ' + bg +';';
}

function setGradient(e){
    gShape = e.target.parentElement.className;
    gDirection = e.target.value;
    body.style= `background-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText();
};


function randomColor(){
    color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    body.style = `background-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText(); 
};

function copyCSS(){
    event.preventDefault();
    const holdText = cssText.innerText;
    const elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = holdText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    // copy button animation
    console.log(copyBtn.innerHTML);
    copyBtn.classList.add('tooltip');
    
    // copyBtn.classList.add('button-slide-down');
    copyBtn.addEventListener('transitionend', function(){
        copyBtn.classList.remove('tooltip');
     

        // copyBtn.classList.remove('button-slide-down');
    });
}
