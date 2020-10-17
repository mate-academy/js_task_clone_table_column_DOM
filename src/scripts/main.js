'use strict';

const table = document.querySelector('table');

const originColumnIndex = 1;
const secondLast = table.rows[originColumnIndex].cells.length - 1;

for (let i = 0; i < table.rows.length; i++) {
  const tagName = table.rows[i].cells[originColumnIndex].tagName;

  const columnElement = document.createElement(tagName);

  columnElement.textContent = `${table.rows[i].cells[1].innerText}`;
  table.rows[i].insertBefore(columnElement, table.rows[i].cells[secondLast]);
}
