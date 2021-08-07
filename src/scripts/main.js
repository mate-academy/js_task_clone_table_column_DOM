'use strict';

const elementTable = document.querySelector('table');
const tableRows = [...elementTable.rows];

for (let i = 0; i < tableRows.length; i++) {
  const tableCells = [...tableRows[i].cells];

  const newCell = elementTable.rows[i].insertCell(5);

  newCell.outerHTML = tableCells[4].outerHTML;
  tableCells[4].outerHTML = tableCells[1].outerHTML;
}
