'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  for (let i = 0; i < table.rows.length; i++) {
    const createdCell = table.rows[i].insertCell(4);
    const copiedText = table.rows[i].cells[1].textContent;

    createdCell.textContent = copiedText;

    if (
      createdCell === table.rows[0].cells[4] ||
      createdCell === table.rows[table.rows.length - 1].cells[4]
    ) {
      createdCell.style.fontWeight = 'bold';
    }
  }
});
