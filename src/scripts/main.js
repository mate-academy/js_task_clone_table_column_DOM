'use strict';

const table = document.querySelector('table');

function copyColumn(collection, numberOfColumn = 1) {
  const rows = [...collection.rows];

  for (const key of rows) {
    key.lastElementChild.insertAdjacentHTML('beforebegin', `
  <td> ${key.cells[numberOfColumn].textContent} </td>
  `);
  }
}

copyColumn(table);
