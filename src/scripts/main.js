'use strict';

const tableHead = document.querySelector('thead').children[0];
const tableHeadPosition = document.querySelector('tr').children[1];

tableHead.children[4].before(tableHeadPosition.cloneNode(true));

const tableFoot = document.querySelector('tfoot').children[0];
const tableFootPosition = document.querySelector('tr').children[1];

tableFoot.children[4].before(tableFootPosition.cloneNode(true));

const tableBody = document.querySelector('tbody').children;

for (const row of tableBody) {
  const tableBodyString = row;
  const tableBodyStringPosition = row.children[1];

  tableBodyString.children[4].before(tableBodyStringPosition.cloneNode(true));
}
