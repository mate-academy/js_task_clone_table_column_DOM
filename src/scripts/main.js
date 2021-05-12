'use strict';

const table = document.querySelector('table');
const items = table.rows;

[...items].forEach(item => {
  [...item.cells].forEach(cell => {
    if (cell.cellIndex === 1) {
      item.children[3].after(cell.cloneNode(true));
    }
  });
});
