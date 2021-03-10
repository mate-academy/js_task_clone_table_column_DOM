'use strict';

// write your code here
const table = document.querySelector('table');

function cloneElement(indexOfElementToClone, placeToAddClonedElement) {
  let index = 0;

  while (index < table.rows.length) {
    const clonedElement
    = table.rows[index].children[indexOfElementToClone].cloneNode(true);

    table.rows[index].children[placeToAddClonedElement].before(clonedElement);
    index++;
  }
}

cloneElement(1, 4);
