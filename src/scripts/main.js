'use strict';
// Cloned <thead> value and added to row

const tableHeader = document.querySelector('thead').children[0];
const clonedRowName = tableHeader.children[1].cloneNode(true);

tableHeader.children[4].before(clonedRowName);

// Cloned <tbody> values and added to rows
const tableBodyRows = document.querySelector('tbody').children;

for (const position of tableBodyRows) {
  const clonedPositionValue = position.children[1].cloneNode(true);

  position.children[4].before(clonedPositionValue);
}

// Cloned <tfoot> value and added to row
const tableFooter = document.querySelector('tfoot').children[0];
const clonedFooterName = tableFooter.children[1].cloneNode(true);

tableFooter.children[4].before(clonedFooterName);
