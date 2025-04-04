'use strict';

const headRow = document.querySelector('thead tr');
const footRow = document.querySelector('tfoot tr');
const headSecondCol = headRow.children[1].cloneNode(true);
const footSecondCol = footRow.children[1].cloneNode(true);

headRow.children[3].after(headSecondCol);
footRow.children[3].after(footSecondCol);

document.querySelectorAll('tbody tr').forEach((row) => {
  row.children[3].after(row.children[1].cloneNode(true));
});
