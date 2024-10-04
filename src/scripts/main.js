'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const positionColumn = table.rows[i].cells[1];
  const ageColumn = table.rows[i].cells[3];

  const positionColumnCopy = positionColumn.cloneNode(true);

  ageColumn.after(positionColumnCopy);
}
