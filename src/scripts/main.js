'use strict';

// write your code here
const table = document.querySelector('table');
const rowsArr = [...table.rows];

rowsArr.forEach((el) => {
  const copiedCell = el.cells[1].cloneNode();

  copiedCell.textContent = el.cells[1].textContent;

  el.lastElementChild.before(copiedCell);
});
