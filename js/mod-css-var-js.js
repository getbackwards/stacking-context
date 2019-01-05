'use strict';

// get the footer
const footer = document.querySelector('footer');
// console.log(footer);

// get the inputs
const inputs = [].slice.call(document.querySelectorAll(['input', 'select']));
// Console log below is pretty useless in it's current state
// console.log(`1. These are the inputs ${inputs}`);

// get the input id's
const inputProperties = [];

inputs.forEach(input => inputProperties.push([input.id, input.value, input.type]));

// Don't think I need the below ATM
// console.log(`1. These are the input properties ${inputProperties}`);
console.log(inputProperties.length);

for (let i = 0; i < inputProperties.length; i ++) {
    let n = 1;
    // console.log(`${i + n}. Input id and value ${i + n} is: ${inputProperties[i][0]}, ${inputProperties[i][1]} and the type is ${inputProperties[i][2]}`);
}

// console.log(`${inputProperties[i][2]}`);

// trying to do the filter from above with a value  10/12/18
// inputs.forEach(input => inputProperties.filter((x, i) => i === 1));

// Currently don't think I need the below stuff
// const inputValues = [];
// inputs.forEach(input => inputValues.push(input.value));
// console.log(`4. These are the input values: ${inputValues}`);

// add eventListener to the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// Below is triggering every time I move the mouse so comment out for now, was used for slider padding value
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// If the input type is 'color' update the footer color variable otherwise update the padding
/* function handleUpdate() {
if (this.type === 'color') {
    footer.style.setProperty('--footer-color', this.value);
        } else {
            footer.style.setProperty('--palatte-padding-left', this.value + 'px');
    }
} */

inputProperties.forEach(inputProperty => {
    console.log(inputProperty[0], inputProperty[1], inputProperty[2]);
    const inputId = inputProperty[0];
    const inputType = inputProperty[2];

    if (inputType === 'color' && inputId === 'colorvalue') {
        console.log('Input type is color');
        footer.style.setProperty('--footer-color', this.value);
    } else if (inputType === 'range') {
        console.log('Input type is range');
    } else if (inputType === 'select-one') {
        console.log('Input type is select');
    } else {
        console.log("Your action was not accounted for programmatically.");
    }
});

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

    for (let i = 0; i < inputProperties.length; i ++) {
        // let n = 1;
        // console.log(`${i + n}. Input id and value ${i + n} is: ${inputProperties[i][0]}, ${inputProperties[i][1]} and the type is ${inputs[i].type}`);
        // if (this.type === 'color') {
        //     // console.log('keep going');
        //     footer.style.setProperty('--footer-color', this.value);
        // } else {
        //     console.log("Your code ain't working.");
        // }
    }

    inputProperties.forEach(inputProperty => {
        // console.log(inputProperty[0], inputProperty[1], inputProperty[2]);
        const inputType = inputProperty[2];

        if (inputType === 'color') {
            // console.log('keep going');
            footer.style.setProperty('--footer-color', this.value);
        } else {
            // console.log("Your code ain't working.");
        }

    });

    // for (let i = 0; i < inputProperties.length; i ++) {
    //     // let n = 1;
    //     // console.log(`${i + n}. Input id and value ${i + n} is: ${inputProperties[i][0]}, ${inputProperties[i][1]} and the type is ${inputs[i].type}`);
    //
    //     switch (inputs[i].type) {
    //         // case 'color':
    //         case this.type = 'color':
    //             footer.style.setProperty('--footer-color', this.value);
    //             console.log('something');
    //             break;
    //         //     case 1:
    //         //         type = "range";
    //         //         break;
    //         //     case 2:
    //         //         day = "Tuesday";
    //         //         break;
    //         default:
    //             console.log("Your code ain't working.");
    //     }
    // }

    // const inputType = inputs[i].type;
    // console.log(inputType);

    // switch (inputs.type) {
    //     case 'color':
    //     // this.type = 'color';
    //     case this.type = 'color':
    //         // footer.style.setProperty('--footer-color', this.value);
    //         console.log('something');
    //     break;
    // //     case 1:
    // //         type = "range";
    // //         break;
    // //     case 2:
    // //         day = "Tuesday";
    // //         break;
    //     default:
    //     console.log("Your code ain't working.");
    // }

    // inputs.forEach(input => console.log(input.id, input.value));
    // console.log(inputProperties);
}

// handleUpdate();

// Using Map below, was working but think above code is better
// Commenting out for now, remove later if end up not being used 27/12/18
/* let inputPropertiesMap = new Map(inputProperties);
for (let [key, value] of inputPropertiesMap) {
  console.log(key, value);
} */
