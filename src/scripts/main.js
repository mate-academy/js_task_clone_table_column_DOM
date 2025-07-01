'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const cells = row.querySelectorAll('td, th');

  if (cells.length < 2) return;

  if (row.dataset.cloned) return;

  const secondCell = cells[1];
  const lastCell = cells[4];

  const copy = secondCell.cloneNode(true);

  row.insertBefore(copy, lastCell);

  row.dataset.cloned = 'true';
});


