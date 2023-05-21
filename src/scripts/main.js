'use strict';

const tableHeader = document.querySelector('table > thead > tr');
const tableFooter = document.querySelector('table > tfoot > tr');
const item = document.querySelector('th:nth-child(3)');

const tableRow = document.querySelectorAll('table > tbody > tr');

for (const row of tableRow) {
  row.children[3].after(row.children[1].cloneNode(true));
}

tableHeader.children[3].after(item.cloneNode(true));
tableFooter.children[3].after(item.cloneNode(true));
