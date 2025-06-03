'use strict';

// write your code here
const table = document.querySelector('table');

const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

function processRow(row) {
  const cells = row.querySelectorAll('th, td');

  if (cells.length < 5) {
    return;
  }

  const originalPositionCell = cells[1];
  const lastColumnCell = cells[cells.length - 1];
  const newCell = originalPositionCell.cloneNode(false);

  if (
    row.tagName.toLowerCase() === 'tr' &&
    cells[0].tagName.toLowerCase() === 'td'
  ) {
    const ageCell = cells[3];
    const salaryCell = cells[4];

    const age = parseInt(ageCell.textContent);
    const salaryText = salaryCell.textContent.replace(/[$,]/g, '');
    const salary = parseInt(salaryText);

    if (!isNaN(age) && !isNaN(salary)) {
      const sum = age + salary;

      newCell.textContent = sum.toLocaleString();
    } else {
      newCell.textContent = 'N/A';
    }
  } else if (
    row.tagName.toLowerCase() === 'tr' &&
    cells[0].tagName.toLowerCase() === 'th'
  ) {
    newCell.textContent = originalPositionCell.textContent;
  }

  row.insertBefore(newCell, lastColumnCell);
}

const theadRow = thead.querySelector('tr');

if (theadRow) {
  processRow(theadRow);
}

const tbodyRows = tbody.querySelectorAll('tr');

tbodyRows.forEach((row) => {
  processRow(row);
});

const tfootRow = tfoot.querySelector('tr');

if (tfootRow) {
  processRow(tfootRow);
}
