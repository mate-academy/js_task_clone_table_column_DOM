'use strict';

const table = document.querySelector('table');
const columnToCopy = 1;
const whereToPaste = 4;

for (const section of table.children) {
  for (const row of section.children) {
    const cell = row.children[columnToCopy];
    const newCell = row.insertCell(whereToPaste);

    if (section.tagName === 'THEAD' || section.tagName === 'TFOOT') {
      newCell.outerHTML = `<th>${cell.textContent}</th>`;
    } else {
      newCell.append(document.createTextNode(cell.textContent));
    }
  }
}
