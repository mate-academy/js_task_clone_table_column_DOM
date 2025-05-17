'use strict';

// write your code here
const table = document.querySelector('table');
const rows = [...table.querySelectorAll('tr')];
const COPY_COLUMN = 1;

rows.forEach((row, i) => {
  const section = row.closest('thead, tfoot') ? 'th' : 'td';
  const cell = document.createElement(section);

  cell.textContent = rows[i].children[COPY_COLUMN]?.textContent || '';
  row.insertBefore(cell, row.lastElementChild);
});
