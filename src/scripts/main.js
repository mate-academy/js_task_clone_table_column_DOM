'use strict';

const table = document.querySelector('table');

const positionColumnCells = [
  ...table.querySelectorAll('* > tr > *:nth-child(2)'),
];

positionColumnCells.map(cell =>
  cell.nextElementSibling.nextElementSibling.after(cell.cloneNode(true))
);
