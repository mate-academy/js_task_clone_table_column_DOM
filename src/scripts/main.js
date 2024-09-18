'use strict';

// write your code here
const table = document.querySelector('table');

const rowsArr = Array.from(table.rows);

rowsArr.forEach((el, index) => {
  if (index === 0 || index === rowsArr.length - 1) {
    const cell = document.createElement('th');

    cell.innerText = el.cells[1].innerText;

    el.insertBefore(cell, el.cells[el.cells.length - 1]);
  } else {
    const cell = el.insertCell(el.cells.length - 1);

    cell.innerText = el.cells[1].innerText;
    cell.style.cssText = el.style.cssText;
  }
});
