'use strict';

// create "Position" column header and clone for footer
const positionTitle = document.createElement('th');

positionTitle.textContent = 'Position';

const positionTitleFoot = positionTitle.cloneNode(true);

// select the table "head" and "foot"
const head = document.querySelector('thead');
const foot = document.querySelector('tfoot');

// select the thead and tfoot titles
const footers = foot.querySelectorAll('th');
const headers = head.querySelectorAll('th');

// select the first and last rows (as titles)
const rowsTitle = [...document.querySelectorAll('tr')];
const rowTitleHead = rowsTitle[0];
const rowTitleFoot = rowsTitle[rowsTitle.length - 1];

// insert "Position" column header as a pre-last column
rowTitleHead.insertBefore(positionTitle, headers[headers.length - 1]);
rowTitleFoot.insertBefore(positionTitleFoot, footers[footers.length - 1]);

// get all tr from document
const tbody = document.querySelector('tbody');
const tr = [...tbody.querySelectorAll('tr')];

// create array for pasting pre-last cells from every row
const secondColCells = [];

// iterate through all rows and push cells to "secondColCells"
tr.forEach((element) => {
  secondColCells.push(element.cells[1]);
});

// insert filtered cells in a table
secondColCells.forEach((cell, index) => {
  const row = tr[index];
  const newCell = cell.cloneNode(true);
  const lastChild = row.lastElementChild;

  row.insertBefore(newCell, lastChild);
});
