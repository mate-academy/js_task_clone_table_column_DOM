'use strict';

const tableHead = document.querySelector('thead');
const headElement = tableHead.children[0].children[1];

const [...tableHeadRow] = tableHead.children[0].children; // for index
const index = tableHeadRow.length - 2; // index number found

tableHead.children[0].children[index].after(headElement.cloneNode(true));

const tableFoot = document.querySelector('tfoot');
const footElement = tableHead.children[0].children[1];

tableFoot.children[0].children[index].after(footElement.cloneNode(true));

const tableBodyRows = document.querySelector('tbody').children;

for (const row of tableBodyRows) {
  const element = row.children[1];

  row.children[index].after(element.cloneNode(true));
}
