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

inputs.forEach(input => inputProperties.push([input.id, input.value]));

// Don't think I need the below ATM
console.log(`1. These are the input properties ${inputProperties}`);
console.log(inputProperties.length);

for (let i = 0; i < inputProperties.length; i ++) {
    let n = 1;
    console.log(`${i + n}. Input id and value ${i + n} is: ${inputProperties[i][0]}, ${inputProperties[i][1]}`);
    // let j = i + n;
    // console.log(`${j + n}. These are the input values ${inputProperties[i][1]}`);
    // Below ain't working properly but counter number so not that important ATM
    // n + j;
    // j++;
   //  i++;
}

// This works but it's not what i want, prob have to do a forEach and then filter?
// Yeah nice trick but don't think I really want this commenting out for now
// https://stackoverflow.com/questions/48129569/how-to-extract-every-second-value-from-array
// console.log(
//     `Input properties filter: ${inputProperties.filter((x, i) => i === 1)}`
// );

// inputs.forEach(input => inputProperties.filter((x, i) => i === 1));

// trying to do the filter from above with a value  10/12/18
inputs.forEach(input => inputProperties.filter((x, i) => i === 1));

// Currently don't think I need the below stuff
// const inputValues = [];
// inputs.forEach(input => inputValues.push(input.value));
// console.log(`4. These are the input values: ${inputValues}`);

// Currently don't think I need the below stuff
// const inputIds = [];
// inputs.forEach(input => inputIds.push(input.id));

// Below works but am trying to use the inputProperties array, currently on line 22
// console.log(`5. These are the input id's: ${inputIds}`);  // was up to here

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

var myObject = new Map();
myObject.set('z', 1);
myObject.set('@', 2);
myObject.set('b', 3);
for (var [key, value] of myObject) {
  console.log(key, value);
}

console.log(new Map(inputProperties));

let inputPropertiesMap = new Map(inputProperties);

// Below works,not quite what I want though
// for (let [key, value] of inputPropertiesMap) {
//  console.log(key, value);
// }

var colors = ['red', 'green', 'blue'];
for (var i = 0; i < inputPropertiesMap.length; i++) {
  console.log("This is " + inputPropertiesMap[i]);
}

for (let [key, value] of inputPropertiesMap) {
  console.log(key, value);
}
