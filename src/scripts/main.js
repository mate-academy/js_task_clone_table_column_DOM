'use strict';

// const table = document.querySelector('table');

// console.log(table);

// for (let i = 0; i < table.rows.length; i++) {
//   const position = table.rows[i].cells[1];
//   const salary = table.rows[i].cells[4];
//   const positionCopy = position.cloneNode(true);

//   table.rows[i].insertBefore(positionCopy, salary);
// } *I want to leave this comment please

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cloned = row.cells[1].cloneNode(true);
  const lastChild = row.cells[4];

  row.insertBefore(cloned, lastChild);
}
