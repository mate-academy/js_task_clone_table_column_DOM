'use strict';

// write your code here

const copySelectedColumn = (columnN, numberPlace) => {
  const table = document.querySelector('table');
  const rows = document.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const cell = table.rows[i].cells[columnN];
    const newCell = document.createElement(cell.tagName);

    newCell.textContent = cell.textContent;

    rows[i].children[numberPlace].after(newCell);
  }
};

copySelectedColumn(1, 3);
