'use strict';

// const { createElement } = require('react');

// write your code here
const table = document.querySelector('table');

function cloneSecondColumn(section) {
  const rows = section.querySelectorAll('tr');

  for (const row of rows) {
    const positionCell = row.children[1];
    const newCell = document.createElement(positionCell.tagName.toLowerCase());

    newCell.textContent = positionCell.textContent;

    row.insertBefore(newCell, row.lastElementChild);
  }
}

cloneSecondColumn(table.querySelector('thead'));
cloneSecondColumn(table.querySelector('tbody'));
cloneSecondColumn(table.querySelector('tfoot'));
