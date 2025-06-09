'use strict';

const table = document.querySelector('table');

const cloneColumn = (item) => {
  const cells = item.children;

  const cloned = cells[1].cloneNode(true);

  item.insertBefore(cloned, cells[4]);
};

['thead', 'tbody', 'tfoot'].forEach((section) => {
  const rows = table.querySelector(section).rows;

  for (const row of rows) {
    cloneColumn(row);
  }
});
