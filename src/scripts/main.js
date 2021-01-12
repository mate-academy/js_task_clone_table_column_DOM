'use strict';

const tableRows = document.querySelectorAll('tr');

function shiftColumn(tableElement, teg) {
  tableElement.cells[4].insertAdjacentHTML('beforebegin',
    `${teg}${tableElement.cells[1].textContent}`);
};

for (const row of tableRows) {
  let teg = '<td>';

  if (row.cells[0].tagName === 'TH') {
    teg = '<th>';
  };
  shiftColumn(row, teg);
};
