'use strict';

const tableHeader = document.querySelector('thead').children[0];
const tableBody = [...document.querySelector('tbody').children];
const tableFooter = document.querySelector('tfoot').children[0];

addColumn(tableHeader, 'th');
addColumn(tableFooter, 'th');

for (const row of tableBody) {
  addColumn(row, 'td');
}

function addColumn(row, elem) {
  row.children[4].insertAdjacentHTML('beforebegin', `
    <${elem}>${row.children[1].textContent}</${elem}>
  `);
}
