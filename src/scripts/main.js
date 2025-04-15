'use strict';

const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.children[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, row.lastElementChild);
});

const thead = document.querySelector('thead');
const rows1 = thead.querySelectorAll('tr');

rows1.forEach((row) => {
  const secondCell = row.children[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, row.lastElementChild);
});

const tfoot = document.querySelector('tfoot');
const rows2 = tfoot.querySelectorAll('tr');

rows2.forEach((row) => {
  const secondCell = row.children[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, row.lastElementChild);
});
