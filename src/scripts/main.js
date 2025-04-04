'use strict';

const tableHead = document.querySelector('thead');
const tableData = document.querySelector('tbody');
const tableFoot = document.querySelector('tfoot');
const dataCopy = [];

const copiedHeadCell = tableHead.rows[0].cells[1].cloneNode(true);
const copiedFootCell = tableFoot.rows[0].cells[1].cloneNode(true);

tableHead.rows[0].cells[4].insertAdjacentElement('beforebegin', copiedHeadCell);
tableFoot.rows[0].cells[4].insertAdjacentElement('beforebegin', copiedFootCell);

for (let i = 0; i < tableData.rows.length; i++) {
  dataCopy.push(tableData.rows[i].cells[1]);
}

for (let i = 0; i < dataCopy.length; i++) {
  const copiedCell = dataCopy[i].cloneNode(true);

  tableData.rows[i].cells[4].insertAdjacentElement('beforebegin', copiedCell);
}
