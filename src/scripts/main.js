'use strict';

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');
const positionHeader = headerRow.children[1].cloneNode(true);

headerRow.insertBefore(
  positionHeader,
  headerRow.children[headerRow.children.length - 1],
);

const positionBody = table.querySelectorAll('tbody tr');

positionBody.forEach((row) => {
  const positionBodyRows = row.children[1].cloneNode(true);

  row.insertBefore(positionBodyRows, row.children[row.children.length - 1]);
});

const footerRow = table.querySelector('tfoot tr');
const positionFooter = footerRow.children[1].cloneNode(true);

footerRow.insertBefore(
  positionFooter,
  footerRow.children[footerRow.children.length - 1],
);
