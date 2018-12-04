'use strict';

// get the footer
const footer = document.querySelector('footer');
// console.log(footer);

// get the inputs
const inputs = [].slice.call(document.querySelectorAll(['input', 'select']));
// console.log(inputs);

// get the input id's
const inputProperties = [];

inputs.forEach(input => inputProperties.push([input.id, input.value]));
// console.log(inputProperties);
// console.log(inputProperties[0]);
// console.log(inputProperties[0, 0]);
// console.log(inputProperties[0]);

// This works but it's not what i want, prob have to do a forEach and then filter?
console.log(
    inputProperties.filter((x, i) => i === 1)
);

// add eventListener to the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// Below is triggering every time I move the mouse so comment out for now, was used for slider padding value
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// If the input type is 'color' update the footer color variable otherwise update the padding
// function handleUpdate() {
//   if (this.type === 'color') {
//     footer.style.setProperty('--footer-color', this.value);
//   } else {
//     footer.style.setProperty('--palatte-padding-left', this.value + 'px');
//   }
// }

// changing handle update to a switch
function handleUpdate() {
    // if (this.type === 'color') {
    //     footer.style.setProperty('--footer-color', this.value);
    // } else {
    //     footer.style.setProperty('--palatte-padding-left', this.value + 'px');
    // }

    // switch (inputs) {
    //     case 0:
    //         type = 'color';
    //         break;
    //     case 1:
    //         type = "range";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    // }

    // switch (inputs) {
    //     case 0:
    //         type = 'color';
    //         break;
    //     case 1:
    //         type = "range";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     default:
    //         day = "Wednesday";
    // }

    // inputs.forEach(input => console.log(input.id, input.value));
    console.log(inputProperties);
}

// handleUpdate();
