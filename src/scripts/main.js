'use strict';

// write your code here
// const table = document.getElementsByTagName('table');
// const thead = document.getElementsByTagName('thead');
// const tbody = document.getElementsByTagName('tbody');

// thead.item(1);

const tables = document.getElementsByTagName('table');

if (tables.length > 0) {
  const table = tables[0];
  const row = table.rows;
  const copiedElements = [];

  for (let i = 0; i < row.length; i++) {
    const copiedElement = table.rows[i].cells[1];

    copiedElements.push(copiedElement.innerHTML);
  }

  for (let index = 0; index < row.length; index++) {
    const cell = row[index].insertCell(4);

    cell.innerHTML = copiedElements[index];
  }
}
