'use strict';

const table = document.querySelector('table');
const rows = table.rows;

[...rows].forEach((el, i, arr) => {
  const newElement = arr[i].cells[1].cloneNode(true);
  const referenceElement = arr[i].cells[arr[i].cells.length - 1];

  arr[i].insertBefore(newElement, referenceElement);
});
