'use strict';

// const table = document.querySelector('table');

// for (let i = 0; i < rows.length; i++) {
//   const clone = table.rows[i].cells[1].cloneNode(true);

//   table.rows[i].cells[4].insertAdjacentElement('beforebegin, clone');
// }

const table = document.querySelector('table');

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  rows[i].cells[4].before(rows[i].cells[1].cloneNode(true));
}
