'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

for (const row of rows) {
  const value = row.children;
  const clonedValue = value[1].cloneNode(true);

  row.insertBefore(clonedValue, value[value.length - 1]);
}
