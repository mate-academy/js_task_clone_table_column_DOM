'use strict';

const table = document.querySelector('table');

[...table.children].forEach(item => cloneColumn(item));

function cloneColumn(row) {
  for (let i = 0; i < [...row.children].length; i++) {
    row.rows[i].cells[4].before((row.rows[i].cells[1]).cloneNode(true));
  }
}
