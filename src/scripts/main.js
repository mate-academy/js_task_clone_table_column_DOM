'use strict';

const positionRow = document.querySelectorAll('tr');

[...positionRow].forEach((row, index) =>
  positionRow[index].cells[3].after(row.cells[1].cloneNode(true))
);
