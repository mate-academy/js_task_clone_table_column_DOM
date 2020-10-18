'use strict';

const table = document.querySelector('table');

const indexToCopy = 1;
const indexToInsert = table.rows[indexToCopy].cells.length - 1;

for (let i = 0; i < table.rows.length; i++) {
  const tagToCopy = table.rows[i].cells[indexToCopy].tagName;

  const copiedElement = document.createElement(tagToCopy);

  copiedElement.textContent = `${table
    .rows[i]
    .cells[indexToCopy]
    .innerText}`;

  table.rows[i]
    .insertBefore(copiedElement, table.rows[i].cells[indexToInsert]);
}
