'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copyCell = document.createElement(row.cells[1].tagName);

  copyCell.innerHTML = row.cells[1].innerHTML;
  row.insertBefore(copyCell, row.cells[row.cells.length - 1]);
}

// Alternative version;
// const table = document.querySelector('table');
// const thead = table.querySelector('thead');
// const tbody = table.querySelector('tbody');
// const tfoot = table.querySelector('tfoot');

// function cloneAndInsertColumn(section) {
//   const rows = section.querySelectorAll('tr');

//   rows.forEach((row) => {
//     const cells = row.children;
//     const clonedCell = cells[1].cloneNode(true);

//     row.insertBefore(clonedCell, cells[cells.length - 1]);
//   });
// }

// cloneAndInsertColumn(thead);
// cloneAndInsertColumn(tbody);
// cloneAndInsertColumn(tfoot);
