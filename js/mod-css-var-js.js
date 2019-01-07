'use strict';

// get the inputs
const inputs = [].slice.call(document.querySelectorAll(['input', 'select']));

// add eventListener to the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate(e) {
    switch (this.id) {
        // case 'colorvalue':
        //     footer.style.setProperty('--footer-color', this.value);
        //     break;
        // case 'margin':
        //     footer.style.setProperty('--palatte-padding-left', this.value + 'px')
        //     break;
        case 'div-one':
            document.getElementById("div1").style.setProperty('--z-index-div-one', this.value);
            break;
        case 'div-two':
            document.getElementById("div2").style.setProperty('--z-index-div-one', this.value);
            break;
        default:
            console.log("Your action was not accounted for programmatically.");
    }
}
