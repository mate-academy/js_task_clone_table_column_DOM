'use strict';

const table = document.querySelector('table');
const columnIndex = 1;

function copyColumn(tableData, index) {
  const sections = [tableData.tHead, ...tableData.tBodies, tableData.tFoot];

  sections.forEach((section) => {
    if (section) {
      for (let i = 0; i < section.rows.length; i++) {
        const row = section.rows[i];
        const cell = row.cells[index];

        if (cell) {
          const newCell =
            section === table.tHead || section === table.tFoot
              ? document.createElement('th')
              : document.createElement('td');

          newCell.textContent = cell.textContent || cell.innerText;

          row.insertBefore(newCell, row.cells[row.cells.length - 1]);
        }
      }
    }
  });
}

copyColumn(table, columnIndex);
