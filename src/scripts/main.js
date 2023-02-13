'use strict';

const table = document.querySelector('table');

const tableHeadRow = table.querySelector('thead').querySelector('tr');
const tableBodyRow = table.querySelector('tbody').querySelectorAll('tr');
const tableFootRow = table.querySelector('tfoot').querySelector('tr');

const copyHead = document.createElement('th');

copyHead.textContent = tableHeadRow.children[1].textContent;

tableHeadRow.insertBefore(copyHead, tableHeadRow.children[4]);

for (const row of tableBodyRow) {
  const copyBody = document.createElement('td');

  copyBody.textContent = row.children[1].textContent;

  row.insertBefore(copyBody, row.children[4]);
}

const copyFoot = document.createElement('th');

copyFoot.textContent = tableFootRow.children[1].textContent;

tableFootRow.insertBefore(copyFoot, tableFootRow.children[4]);
