'use strict';

// console.log('I work');

// get the footer
const footer = document.querySelector('footer');
console.log(footer);

// get the inputs
const inputs = [].slice.call(document.querySelectorAll('input'));
console.log(inputs);

// add eventListener to the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// If the input type is 'color' update the footer color variable otherwise update the padding
function handleUpdate() {
  if (this.type === 'color') {
    footer.style.setProperty('--footer-color', this.value);
  } else {
    footer.style.setProperty('--palatte-padding-left', this.value + 'px');
  }
}
