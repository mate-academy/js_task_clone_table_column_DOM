'use strict';

const table = document.querySelector('table');

if (table) {
  const rows = table.rows;
  const dataToAppend = [];

  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[1];

    if (cell) {
      dataToAppend.push(cell.textContent.trim());
    }
  }

  for (let i = 0; i < rows.length; i++) {
    const insertIndex = rows[i].cells.length - 1;
    const newCell = rows[i].insertCell(insertIndex);

    if (i === 0 || i === rows.length - 1) {
      newCell.outerHTML = `<th>${dataToAppend[i]}</th>`;
    } else {
      newCell.textContent = dataToAppend[i];
    }
  }
}
