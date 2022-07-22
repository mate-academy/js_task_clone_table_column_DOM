'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(element => {
  element.children[3].after(element.cells[1].cloneNode(true));
});
