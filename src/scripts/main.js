'use strict';

// write your code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

function cloneSecondColumn() {
  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    const secondCell = row.cells[1].cloneNode(true);

    row.insertBefore(secondCell, row.lastElementChild);
  });

  const headerCell = thead.rows[0].cells[1].cloneNode(true);

  thead.rows[0].insertBefore(headerCell, thead.rows[0].lastElementChild);

  const footerCell = tfoot.rows[0].cells[1].cloneNode(true);

  tfoot.rows[0].insertBefore(footerCell, tfoot.rows[0].lastElementChild);
}

cloneSecondColumn();
