'use strict';

// write your code here
const table = [...document.querySelectorAll('table')];

const headerLength = table[0].tHead.rows[0].children.length;
const headerCell = document.createElement('th');

headerCell.textContent = table[0].tHead.rows[0].children[1].textContent;
table[0].tHead.rows[0].children[headerLength - 2].after(headerCell);

const bodyRows = table[0].tBodies[0].rows;

for (const row of bodyRows) {
  const cell = document.createElement('td');

  cell.textContent = row.children[1].textContent;
  row.children[headerLength - 2].after(cell);
}

const footerRow = table[0].tFoot;

const footerCell = document.createElement('th');
const footerLength = table[0].tFoot.rows[0].children.length;

footerCell.textContent = footerRow.rows[0].children[1].textContent;
table[0].tFoot.rows[0].children[footerLength - 2].after(footerCell)
