'use strict';

const tableHead = document.querySelector('thead');
const tableHeadRow = tableHead.children[0];
const theadToPastElement = tableHeadRow.children[1];
const tableFoot = document.querySelector('tfoot');
const tableFootRow = tableFoot.children[0];
const tfootToPastElement = tableFootRow.children[1];

tableFootRow.insertBefore(
  tfootToPastElement.cloneNode(true),
  tableFootRow.children[4]
);

tableHeadRow.insertBefore(
  theadToPastElement.cloneNode(true),
  tableHeadRow.children[4]
);

const tbodyRows = [...document.querySelector('tbody').children];

for (const row of tbodyRows) {
  row.insertBefore(
    row.children[1].cloneNode(true),
    row.children[4]
  );
}
