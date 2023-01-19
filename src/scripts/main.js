'use strict';

const cells = document.querySelectorAll('tr');

cells.forEach(cell =>
  cell.insertBefore(cell.children[1].cloneNode(true), cell.children[4]));
