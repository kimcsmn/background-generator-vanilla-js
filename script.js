// GETTING ELEMENTS FROM DOM
const color1 = document.querySelector('.color-inputs .color1');
const color2 = document.querySelector('.color-inputs .color2');

// EVENT LISTENERS
color1.addEventListener('change', changeColorValues)
color2.addEventListener('change', changeColorValues)

// FUNCTIONS
function changeColorValues(event){
    // console.log(event.target.value);
    document.body.style = `background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`;
}

