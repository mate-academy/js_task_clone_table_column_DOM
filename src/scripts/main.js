'use strict';

const rows = [...document.querySelectorAll('tr')];

const headerRow = rows[0];
const positionHeader = document.createElement('th');

positionHeader.textContent = 'Position';
headerRow.insertBefore(positionHeader, headerRow.children[4]);

const footerRow = rows[rows.length - 1];
const positionFooter = document.createElement('th');

positionFooter.textContent = 'Position';
footerRow.insertBefore(positionFooter, footerRow.children[4]);

rows.forEach(row => {
  const secondColumn = row.querySelector('td:nth-child(2)');

  if (secondColumn) {
    const clonedColumn = secondColumn.cloneNode(true);

    row.insertBefore(clonedColumn, row.children[4]);
  }
});
