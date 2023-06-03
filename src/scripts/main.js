'use strict';

const table = document.querySelector('table');

const rows = table.querySelectorAll('tr');

rows.forEach(row => {
  const cells = row.querySelectorAll('td, th');
  const contentToInsert = cells[1].innerHTML;
  const newCell = document.createElement(cells[1].tagName);

  newCell.innerHTML = contentToInsert;
  row.insertBefore(newCell, cells[4]);
});
