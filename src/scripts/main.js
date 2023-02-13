'use strict';

const tableHeadRow = document
  .querySelector('table')
  .querySelector('thead')
  .querySelector('tr');

const tableBodyRow = document
  .querySelector('table')
  .querySelector('tbody')
  .querySelectorAll('tr');

const tableFootRow = document
  .querySelector('table')
  .querySelector('tfoot')
  .querySelector('tr');

const copyHead = tableHeadRow.children[1].cloneNode(true);

tableHeadRow.insertBefore(copyHead, tableHeadRow.children[4]);

for (const row of tableBodyRow) {
  const copyBody = row.children[1].cloneNode(true);

  row.insertBefore(copyBody, row.children[4]);
}

const copyFoot = tableFootRow.children[1].cloneNode(true);

tableFootRow.insertBefore(copyFoot, tableFootRow.children[4]);
