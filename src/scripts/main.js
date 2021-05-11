'use strict';

const sourceColumnName = 'Position';
const targetColumnName = 'Salary';
const tableHeader = document.querySelector('thead');
const tableRows = document.querySelectorAll('tr');
const sourceIndex = findColumnIndex(
  tableHeader.children,
  sourceColumnName
);
const targetIndex = findColumnIndex(tableHeader.children, targetColumnName);

for (let i = 0; i < tableRows.length; i++) {
  const clonedElement = tableRows[i].children[sourceIndex].cloneNode(true);

  tableRows[i].children[targetIndex].before(clonedElement);
}

function findColumnIndex(header, columnTitle) {
  return [...header[0].children].map(element => element.innerText)
    .indexOf(columnTitle);
}
