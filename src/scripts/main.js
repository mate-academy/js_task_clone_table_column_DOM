'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length < 2) {
    return; // пропускаем такие строки
  }

  const cloned = cells[1].cloneNode(true);

  row.insertBefore(cloned, cells[cells.length - 1]);
});
