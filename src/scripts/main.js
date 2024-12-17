'use strict';

// write your code here

const table = document.querySelector('table');

// cloning header
const headerRow = table.querySelector('thead tr');
const secondHeaderCeil = headerRow.querySelectorAll('th')[1];
const lastHeaderCeil =
  headerRow.querySelectorAll('th')[headerRow.querySelectorAll('th').length - 1];
const cloneHeader = secondHeaderCeil.cloneNode(true);

lastHeaderCeil.insertAdjacentElement('beforebegin', cloneHeader);

// cloning body
const bodyRows = table.querySelectorAll('tbody tr');
const bodyRowsArr = [...bodyRows];

bodyRowsArr.forEach((bodyRow) => {
  const secondBodyCeil = bodyRow.querySelectorAll('td')[1];
  const lastBodyCeil =
    bodyRow.querySelectorAll('td')[bodyRow.querySelectorAll('td').length - 1];
  const cloneBody = secondBodyCeil.cloneNode(true);

  lastBodyCeil.insertAdjacentElement('beforebegin', cloneBody);
});

// cloning footer
const footerRow = table.querySelector('tfoot tr');
const secondFooterCeil = footerRow.querySelectorAll('th')[1];
const lastFooterCeil =
  footerRow.querySelectorAll('th')[footerRow.querySelectorAll('th').length - 1];
const cloneFooter = secondFooterCeil.cloneNode(true);

lastFooterCeil.insertAdjacentElement('beforebegin', cloneFooter);
