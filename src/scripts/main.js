'use strict';

const tableRows = [...document.querySelector('table').rows];

for (const row of tableRows) {
  if (row.parentElement.nodeName === 'THEAD'
  || row.parentElement.nodeName === 'TFOOT') {
    const parentSection = row.parentElement.children[0];
    const newCol = document.createElement('th');

    newCol.textContent = row.children[1].textContent;

    parentSection.insertBefore(newCol, parentSection.lastElementChild);
  };

  if (row.parentElement.nodeName === 'TBODY') {
    const parentSection = row.parentElement.children[row.rowIndex - 1];
    const newCol = document.createElement('td');

    newCol.textContent = row.children[1].textContent;

    parentSection.insertBefore(newCol, parentSection.lastElementChild);
  }
};
