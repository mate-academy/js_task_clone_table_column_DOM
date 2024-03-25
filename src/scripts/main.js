'use strict';

const tableElement = document.querySelector('table');
const row = document.querySelectorAll('tr');

const countOfRows = tableElement.rows.length;

for (let i = 0; i < countOfRows; i++) {
  const newRow = tableElement.rows[i].cells[1].cloneNode(true);

  row[i].insertBefore(newRow, row[i].children[4]);
}
