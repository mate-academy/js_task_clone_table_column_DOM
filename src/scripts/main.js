'use strict';

const oldTable = document.querySelector('table');
const newColumnHeadData = oldTable
  .querySelector('thead > tr > th:nth-child(2)')
  .cloneNode(true);
const newColumnFootData = oldTable
  .querySelector('tfoot > tr > th:nth-child(2)')
  .cloneNode(true);
const copiedColumnData = Array.from(
  oldTable.querySelectorAll('tbody > tr > td:nth-child(2)'),
);
const lastHeadCell = oldTable.querySelector('thead > tr > th:last-child');
const lastFootCell = oldTable.querySelector('tfoot > tr > th:last-child');
const lastColumnData = oldTable.querySelectorAll('tr > td:last-child');

lastHeadCell.before(newColumnHeadData);
lastFootCell.before(newColumnFootData);

for (let i = 0; i < copiedColumnData.length; i++) {
  lastColumnData[i].before(copiedColumnData[i].cloneNode(true));
}
