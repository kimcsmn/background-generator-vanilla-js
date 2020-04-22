// GETTING ELEMENTS FROM DOM
const color1 = document.querySelector('.color-inputs .color1');
const color2 = document.querySelector('.color-inputs .color2');
const cssText = document.querySelector('header .code');
const gradient = document.querySelector('.gradient');
const body = document.body;

// EVENT LISTENERS
color1.addEventListener('input', changeBG);
color2.addEventListener('input', changeBG);
gradient.addEventListener('click', setGradient);

// FUNCTIONS
function changeBG(){
    document.body.style = `background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`;
    updateBgText();

}

function updateBgText(){
    const bg = document.body.style.backgroundImage;
    cssText.innerText = 'background-image: ' + bg +'';
}

function setGradient(e){
    const gShape = e.target.parentElement.className;
    const gDirection = e.target.value;
    body.style= `backgroun-image: ${gShape}-gradient(${gDirection}, ${color1.value}, ${color2.value});`;
    updateBgText();
};