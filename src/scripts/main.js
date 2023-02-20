'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

const secondColumn = rows
  .map(cell => cell.children[1].cloneNode(true));

const penultimateColumn = rows.map(({ children }) => {
  return children[children.length - 2];
});

rows.forEach((row, i) => {
  penultimateColumn[i].after(secondColumn[i]);
});
