'use strict';

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  const Row = table.rows[i].cells[1];
  const clone = Row.cloneNode(true);
  const p2 = table.rows[i].cells[4];

  p2.before(clone);
}
