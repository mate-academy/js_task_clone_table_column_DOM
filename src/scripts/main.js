'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (const row of rows) {
  let cells = row.querySelectorAll('td');

  if (cells.length === 0) {
    cells = row.querySelectorAll('th');
  }

  const additionalSalaryColumn = cells[4].cloneNode(true);

  // age moving right abit
  cells[4].innerHTML = cells[3].innerHTML;

  // copying position
  cells[4].innerHTML = cells[1].innerHTML;

  row.appendChild(additionalSalaryColumn);
}
