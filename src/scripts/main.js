'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const position = table.rows[i].cells[1];
  const copyPosition = position.cloneNode(true);
  const salary = table.rows[i].lastElementChild;

  salary.before(copyPosition);
}
