'use strict';

const tHeadRows = document.querySelectorAll('thead tr');
const tBodyRows = document.querySelectorAll('tbody tr');

Array.from(tHeadRows).forEach((item) => {
  const cells = Array.from(item.cells);
  const newEL = document.createElement('th');

  newEL.textContent = cells[1].textContent;

  item.insertBefore(newEL, item.cells[cells.length - 1]);
});

Array.from(tBodyRows).forEach((item) => {
  const cells = Array.from(item.cells);
  const newEL = document.createElement('td');

  newEL.textContent = cells[1].textContent;

  item.insertBefore(newEL, item.cells[cells.length - 1]);
});
