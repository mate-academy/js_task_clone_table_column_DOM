'use strict';

const table = document.querySelector('table');

const rows = [...table.rows];

rows.forEach(row => {
  const clone = row.children[1];

  row.insertBefore(clone.cloneNode(true), row.children[4]);
});
