'use strict';

// write your code here
const table = document.querySelector('table');
const tableRows = [...table.querySelectorAll('tr')];

const pasteCellInSectionRowByIndex = (tableSection, index, cell) => {
  tableSection.parentElement.rows[index].cells[3].after(cell);
};

tableRows.forEach((row, i) => {
  const cellClone = row.cells[1].cloneNode(true);
  const tableSection = row.parentElement;

  pasteCellInSectionRowByIndex(tableSection, i, cellClone);
});
