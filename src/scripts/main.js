'use strict';

const headers = Array.from(document.querySelector('tr').children);

const parentHeader = headers[0].parentElement;
const clonedHeader = headers[1].cloneNode(true);

parentHeader.insertBefore(clonedHeader, headers[4]);

const bodyRows = Array.from(document.querySelector('tbody').children);

for (let i = 0; i < bodyRows.length; i++) {
  const cells = Array.from(bodyRows[i].children);
  const clonedCell = cells[1].cloneNode(true);

  bodyRows[i].insertBefore(clonedCell, cells[4]);
}

const footers = Array.from(
  document.querySelector('tfoot').children[0].children,
);

const parentFooter = footers[0].parentElement;
const cloneFooter = footers[1].cloneNode(true);

parentFooter.insertBefore(cloneFooter, footers[4]);
