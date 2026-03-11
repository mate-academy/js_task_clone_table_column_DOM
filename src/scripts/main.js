'use strict';

const headerPosition = document
  .querySelector('thead tr th')
  .nextElementSibling.cloneNode(true);
const footerPosition = document
  .querySelector('tfoot tr th')
  .nextElementSibling.cloneNode(true);
const headerSalary = document.querySelector('thead tr').lastElementChild;
const footerSalary = document.querySelector('tfoot tr').lastElementChild;
const tableBody = document.querySelector('tbody');
const tableBodyRows = tableBody.children;

headerSalary.replaceWith(headerPosition, headerSalary);
footerSalary.replaceWith(footerPosition, footerSalary);

for (const row of tableBodyRows) {
  const positionCeil = row.cells[1].cloneNode(true);
  const salaryCeil = row.cells[4];

  salaryCeil.replaceWith(positionCeil, salaryCeil);
}
