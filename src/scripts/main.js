'use strict';

const table = document.querySelector('table');
let index = 0;

for (const section of table.children) {
  for (const row of section.children) {
    const cell = row.children[1];
    const newCell = row.insertCell(4);

    if (index === 0 || index === 13) {
      newCell.outerHTML = `<th>${cell.textContent}</th>`;
    } else {
      newCell.append(document.createTextNode(cell.textContent));
    }
    index++;
  }
}
