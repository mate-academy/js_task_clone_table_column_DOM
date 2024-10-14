'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach((row) => {
  const cellContent = row.cells[1].innerHTML;
  const newCells = row.insertCell(row.cells.length - 1);
  const th = `<th>${cellContent}</th>`;
  const td = `<td>${cellContent}</td>`;
  const nameTableSection = row.parentNode.tagName;

  if (nameTableSection === 'THEAD' || nameTableSection === 'TFOOT') {
    newCells.outerHTML = th;
  } else {
    newCells.outerHTML = td;
  }
});
