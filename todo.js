'use strict';

const createButton = document.querySelector('.create');
const removeButton = document.querySelector('.remove');
const input = document.querySelector('.input');
const controls = document.querySelector('.controls');
const container = document.querySelector('.container');

createButton.addEventListener('click', () => {
  if (input.value) {
    let child = document.createElement('div');
    child.setAttribute('class', 'item');
    child.innerHTML = `<p>${input.value}</p>`;
    input.value = '';
    container.prepend(child);
  }
});

removeButton.addEventListener('click', () => {
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});