'use strict';

// get the footer
const footer = document.querySelector('footer');
// console.log(footer);

// get the inputs
const inputs = [].slice.call(document.querySelectorAll(['input', 'select']));
console.log(`These are the inputs ${inputs}`);

// get the input id's
const inputProperties = [];

inputs.forEach(input => inputProperties.push([input.id, input.value]));
// console.log(inputProperties);
// console.log(inputProperties[0]);
// console.log(inputProperties[0, 0]);
// console.log(inputProperties[0]);

console.log(`These are the input properties ${inputProperties}`);

console.log(`These are the input ids ${inputProperties.id}`);

// This works but it's not what i want, prob have to do a forEach and then filter?
console.log(
    `Input properties filter: ${inputProperties.filter((x, i) => i === 1)}`
);

// inputs.forEach(input => inputProperties.filter((x, i) => i === 1));

// trying to do the filter from above with a value  10/12/18
inputs.forEach(input => inputProperties.filter((x, i) => i === 1));

const inputValues = [];
inputs.forEach(input => inputValues.push(input.value));
console.log(`These are the input values: ${inputValues}`);


const inputIds = [];
inputs.forEach(input => inputIds.push(input.id));
console.log(`These are the input id's: ${inputIds}`);  // was up to here

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

// if () {
//     console.log('Now we are getting somewhere.');
// }
