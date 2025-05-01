'use strict';

function tableColumn() {
  const table = document.querySelector('.myTable');
  const tableRows = table.querySelectorAll('tr');
  const tableHeader = table.querySelector('thead');
  const tableHeadCells = tableHeader.querySelectorAll('th');

  for (let i = 0; i < tableHeadCells.length; i++) {
    const cell = tableHeadCells[i];

    cell.addEventListener('click', () => {
      for (let j = 0; j < tableRows.length; j++) {
        const row = tableRows[j];
        const cells = row.querySelectorAll('td');

        if (cells[i]) {
          cells[i].classList.toggle('highlight');
        }
      }
    });
  }
}

tableColumn();
