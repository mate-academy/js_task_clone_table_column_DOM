'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.dashboard');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  const cloneColumn = (section) => {
    const rows = section.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = row.querySelectorAll('th, td');
      const cloneCell = cells[1].cloneNode(true);

      row.insertBefore(cloneCell, cells[4]);
    });
  };

  cloneColumn(thead);
  cloneColumn(tbody);
  cloneColumn(tfoot);
});
