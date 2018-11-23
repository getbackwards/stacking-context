'use strict';

// console.log('I work');

const footer = document.querySelector('footer');
console.log(footer);

const inputs = [].slice.call(document.querySelectorAll('input'));
console.log(inputs);

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
  if (this.type === 'color') {
    footer.style.setProperty('--footer-color', this.value);
  } else {
    footer.style.setProperty('--palatte-padding-left', this.value + 'px');
  }
}
