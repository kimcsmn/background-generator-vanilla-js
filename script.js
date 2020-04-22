// GETTING ELEMENTS FROM DOM
const color1 = document.querySelector('.color-inputs .color1');
const color2 = document.querySelector('.color-inputs .color2');
const cssText = document.querySelector('header .code');
const gradient = document.querySelector('.gradient');

// EVENT LISTENERS
color1.addEventListener('input', changeBG);
color2.addEventListener('input', changeBG);
gradient.addEventListener('click', getGradient);

// FUNCTIONS
function changeBG(event){
    // console.log(event.target.value);
    document.body.style = `background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`;
    updateBgText();

}

function updateBgText(){
    const bg = document.body.style.backgroundImage;
    cssText.innerText = 'background-image: ' + bg;
}

// to get the gradient element
// add event listeren 
// get the targets value first child and second childs value
function setGradient(e){
    console.log(e.target.parentElement.className);
    const gShape = e.target.parentElement.className;
    console.log(gDirection);
    const gDirection = e.target.value;
    // changeBG();
};