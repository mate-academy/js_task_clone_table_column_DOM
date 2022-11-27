'use strict';

function createColumn(column, position) {
  const table = document.querySelector('table');

  [...table.children].map(parentElement => {
    [...parentElement.children].map(childElement => {
      let newElement;

      parentElement === table.querySelector('tbody')
        ? newElement = document.createElement('td')
        : newElement = document.createElement('th');

      newElement.textContent = childElement.children[column - 1].textContent;
      childElement.insertBefore(newElement, childElement.children[position]);
    });
  });
}

createColumn(2, 4);
