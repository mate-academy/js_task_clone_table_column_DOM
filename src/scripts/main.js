'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

const tbodyRows = [...tbody.rows];

const headerCell = thead.rows[0].cells[1].cloneNode(true);

thead.rows[0].insertBefore(headerCell, thead.rows[0].lastElementChild);

const footerCell = tfoot.rows[0].cells[1].cloneNode(true);

tfoot.rows[0].insertBefore(footerCell, tfoot.rows[0].lastElementChild);

const copy = [];

tbodyRows.forEach((row) => {
  const cellDuplicate = row.cells[1];

  copy.push(cellDuplicate);
});

tbodyRows.forEach((tr) => {
  const newCell = tr.insertCell(4);
  const itemIndex = tr.sectionRowIndex;
  const content = copy[itemIndex].textContent;

  newCell.textContent = content;
});
