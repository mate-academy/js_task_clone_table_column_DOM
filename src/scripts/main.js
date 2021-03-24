'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].children[1].cloneNode(true);

  rows[i].insertBefore(cell, rows[i].children[4]);
}
