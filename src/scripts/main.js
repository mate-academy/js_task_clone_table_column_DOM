'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const tdRow = row.querySelectorAll('th, td');
  const clone = tdRow[1].cloneNode(true);

  row.insertBefore(clone, tdRow[4]);
}
