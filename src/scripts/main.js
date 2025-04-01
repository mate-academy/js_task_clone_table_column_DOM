'use strict';
// God bless you mateacademy-ai-mentor

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const rows = table.rows;
  let positionIndex = -1;
  let ageIndex = -1;

  for (let i = 0; i < rows[0].cells.length; i++) {
    if (rows[0].cells[i].textContent.trim() === 'Position') {
      positionIndex = i;
    }

    if (rows[0].cells[i].textContent.trim() === 'Age') {
      ageIndex = i;
    }
  }

  for (const row of rows) {
    const cells = Array.from(row.cells);
    const positionCell = cells[positionIndex].cloneNode(true);

    row.insertBefore(positionCell, cells[ageIndex + 1]);
  }
});
