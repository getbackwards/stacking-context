'use strict';

// get the footer
const footer = document.querySelector('footer');
// console.log(footer);

// get the inputs
const inputs = [].slice.call(document.querySelectorAll(['input', 'select']));
// Console log below is pretty useless in it's current state
console.log(`1. These are the inputs ${inputs}`);

// get the input id's
const inputProperties = [];

inputs.forEach(input => inputProperties.push([input.id, input.value, input.type]));

// Don't think I need the below ATM
console.log(`1. These are the input properties ${inputProperties}`);
console.log(inputProperties.length);

// get the input id's
const inputIds = [];
inputs.forEach(input => inputIds.push([input.id]));
console.log("These are the input IDs " + inputIds);
// inputProperties.forEach(inputType => console.log("This is the " + inputs[0].type));

// for (let i = 0; i < inputProperties.length; i ++) {
    // let n = 1;
    // console.log(`${i + n}. Input id and value ${i + n} is: ${inputProperties[i][0]}, ${inputProperties[i][1]} and the type is ${inputProperties[i][2]}`);
// }

// console.log(`${inputProperties[i][2]}`);

// trying to do the filter from above with a value  10/12/18
// inputs.forEach(input => inputProperties.filter((x, i) => i === 1));

// Currently don't think I need the below stuff
// const inputValues = [];
// inputs.forEach(input => inputValues.push(input.value));
// console.log(`4. These are the input values: ${inputValues}`);

// add eventListener to the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));

console.log('============================');
console.log("Here " + inputIds);
console.log("Here " + inputIds[0]);
console.log("Here " + inputProperties[0][0]);

for (let i = 0; i < inputProperties.length; i++) {
    if (inputProperties[i][0] === 'colorvalue') {
        console.log('Input type is color');
    } else {
        console.log("something else.")
    }
}

function handleUpdate() {

}

