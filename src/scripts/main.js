'use strict';

// write your code here

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const position = row.cells[1];
  const salary = row.cells[4];

  row.append(position.cloneNode(true));
  row.append(salary);
}
