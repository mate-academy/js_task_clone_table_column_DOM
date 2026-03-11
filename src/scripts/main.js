'use strict';

const tableHeadRow = document.querySelector('thead tr');
const headerPosition = document
  .querySelector('thead tr th')
  .nextElementSibling.cloneNode(true);
const footerPosition = document
  .querySelector('tfoot tr th')
  .nextElementSibling.cloneNode(true);
const salary = document.querySelector('thead tr').lastElementChild;

const tableBody = document.querySelector('tbody');
const tableBodyRows = tableBody.children;

const tableFooterRow = document.querySelector('tfoot tr');

tableHeadRow.append(headerPosition);
tableFooterRow.append(footerPosition);

salary.replaceWith(headerPosition, salary);

for (const row of tableBodyRows) {
  const positionCeil = row.cells[1].cloneNode(true);
  const salaryCeil = row.cells[4];

  row.append(positionCeil);
  salaryCeil.replaceWith(positionCeil, salaryCeil);
}
