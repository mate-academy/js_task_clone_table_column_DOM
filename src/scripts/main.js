'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((el) => {
  const cell = el.firstElementChild.nextElementSibling;
  const newCell = cell.cloneNode(true);
  const lastCell = el.lastElementChild;

  lastCell.before(newCell);
});
