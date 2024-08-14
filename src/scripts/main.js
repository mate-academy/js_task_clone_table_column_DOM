'use strict';

// write your code here
const tableRows = [...document.querySelector('table').rows];

tableRows.forEach((row) => {
  const newCell = row.cells[1].cloneNode(true);

  row.insertBefore(newCell, row.lastElementChild);
});
