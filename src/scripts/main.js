'use strict';

// add header clone
const tableHeader = document.querySelector('thead');
const headerToClone = tableHeader.rows[0].cells[1].cloneNode(true);
const headerRows = tableHeader.rows[0];

headerRows.insertBefore(headerToClone, headerRows.cells[4]);

// add body clone
const tableBody = document.querySelector('tbody');
const tableBodyRows = tableBody.rows;

for (let i = 0; i < tableBodyRows.length; i++) {
  const bodyToClone = tableBody.rows[i].cells[1].cloneNode(true);
  const bodyRows = tableBody.rows[i];

  bodyRows.insertBefore(bodyToClone, bodyRows.cells[4]);
}

// add footer clone
const tableFooter = document.querySelector('tfoot');
const footerToClone = tableFooter.rows[0].cells[1].cloneNode(true);
const footerRows = tableFooter.rows[0];

footerRows.insertBefore(footerToClone, footerRows.cells[4]);
