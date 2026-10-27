'use strict';

// write your code here

const table = document.querySelector('table');

[...table.rows].forEach((row, i) => {
  let element;

  if (i === 0) {
    element = document.createElement('th');
  } else {
    element = document.createElement('td');
  }

  element.textContent = row.cells[1].textContent;

  row.cells[4].insertAdjacentElement('beforebegin', element);
});
