'use strict';

const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const tbody = document.querySelector('tbody');

function addColumn() {
  for (let i = 0; i < arguments.length; i++) {
    const section = arguments[i];

    if (!section) {
      continue;
    }

    const rows = section.rows;
    const isHead = section.tagName === 'THEAD';

    for (let k = 0; k < rows.length; k++) {
      const row = rows[k];

      if (row.cells.length < 2) {
        const cell = document.createElement(isHead ? 'th' : 'td');
        const ref = row.lastElementChild;

        row.insertBefore(cell, ref);
        continue;
      }

      const copy = row.cells[1];
      const last = row.lastElementChild;
      const clone = copy.cloneNode(true);

      row.insertBefore(clone, last);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addColumn(thead, tbody, tfoot);
});
