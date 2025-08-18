'use strict';

const rows = document.querySelectorAll('table tr');

const positionColumn = Array.from(rows).map((row) => {
  const cells = row.querySelectorAll('td');

  return cells[1] ? cells[1].cloneNode(true) : document.createElement('td');
});

rows.forEach((row, i) => {
  const cells = row.querySelectorAll('td');
  const clonedTd = positionColumn[i].cloneNode(true);

  if (cells.length > 0) {
    cells[cells.length - 1].before(clonedTd);
  }
});

const headerRow = document.querySelector('table thead tr');

if (headerRow) {
  const ths = headerRow.querySelectorAll('th');
  const clonedTh = ths[1]
    ? ths[1].cloneNode(true)
    : document.createElement('th');

  ths[3].after(clonedTh);
}

const footerRow = document.querySelector('table tfoot tr');

if (footerRow) {
  const ths = footerRow.querySelectorAll('th');
  const clonedTh = ths[1]
    ? ths[1].cloneNode(true)
    : document.createElement('th');

  if (ths.length > 0) {
    ths[ths.length - 1].before(clonedTh);
  }
}
