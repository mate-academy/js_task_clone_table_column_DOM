'use strict';

// write your code here

const list = document.querySelector('table');

for (let i = 0; i < list.rows.length; i++) {
  const penultimateIndex = list.rows[i].cells.length - 1;
  const cloneElement = list.rows[i].cells[1].cloneNode(true);

  list.rows[i].insertBefore(cloneElement, list.rows[i].cells[penultimateIndex]);
}
