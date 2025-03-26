'use strict';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead tr');
  const tbody = table.querySelectorAll('tbody tr');
  const tfoot = table.querySelector('tfoot tr');

  const lastColumnIndex = thead.children.length - 1;

  function cloneColumn(columnIndex) {
    const headerCell = thead.children[columnIndex].cloneNode(true);

    thead.insertBefore(headerCell, thead.children[lastColumnIndex]);

    tbody.forEach((row) => {
      const cell = row.children[columnIndex].cloneNode(true);

      row.insertBefore(cell, row.children[lastColumnIndex]);
    });

    const footerCell = tfoot.children[columnIndex].cloneNode(true);

    tfoot.insertBefore(footerCell, tfoot.children[lastColumnIndex]);
  }

  cloneColumn(1);
});
