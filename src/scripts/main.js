'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

function copyColumn(table, kindOfColumn) {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cell = row.getElementsByTagName(kindOfColumn)[1].cloneNode(true);
    const lastCell = row.getElementsByTagName(kindOfColumn)[4];

    row.insertBefore(cell, lastCell);
  }
}

copyColumn(tbody, 'td');
copyColumn(thead, 'th');
copyColumn(tfoot, 'th');
