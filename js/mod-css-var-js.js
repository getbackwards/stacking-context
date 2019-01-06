'use strict';
// get the footer
const footer = document.querySelector('footer');
// console.log(footer);

// get the inputs
const inputs = [].slice.call(document.querySelectorAll(['input', 'select']));

const inputIds = [];

inputs.forEach(input => inputIds.push([input.id]));


// console.log(inputIds);

// add eventListener to the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate(e) {
    if (this.id === 'colorvalue') {
        footer.style.setProperty('--footer-color', this.value)
    } else if (this.id === 'margin') {
        footer.style.setProperty('--palatte-padding-left', this.value + 'px')
    } else if (this.id === 'div-one') {
        // footer.style.setProperty('--palatte-padding-left', this.value + 'px')
        // document.getElementById("div1").style.color = "blue";
        document.getElementById("div1").style.setProperty('--z-index-div-one', this.value);
        console.log("div one input selected.");
    } else {
        console.log("Your action was not accounted for programmatically.");
    }
}
// function handleUpdate() {
//
//     if (inputIds[0][0] === 'colorvalue') {
//         console.log('This is the color input');
//     } else if (inputIds[0][0] === 'margin') {
//         console.log('This is the range input');
//     }
// }
