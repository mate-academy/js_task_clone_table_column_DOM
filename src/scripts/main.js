'use strict';

function cloneTbody() {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const position = row.cells[1].textContent;

    row.cells[4].textContent = position;

    const salary = row.cells[4].textContent;

    const newCell = row.insertCell(5);

    newCell.textContent = salary;
  });
}

cloneTbody();
