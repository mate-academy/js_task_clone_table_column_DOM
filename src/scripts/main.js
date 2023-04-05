'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const position = table.rows[i].cells[1];
  const salary = table.rows[i].cells[4];
  const positionClone = position.cloneNode(true);

  table.rows[i].insertBefore(positionClone, salary);
}
