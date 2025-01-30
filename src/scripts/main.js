'use strict';

const rows = [...document.querySelectorAll('thead tr')]
  .concat([...document.querySelectorAll('tbody tr')])
  .concat([...document.querySelectorAll('tfoot tr')]);

for (let i = 0; i < rows.length; i++) {
  const newCell = document.createElement(
    rows[i].cells[1].tagName.toLowerCase(),
  );

  newCell.textContent = rows[i].cells[1].textContent;
  rows[i].insertBefore(newCell, rows[i].cells[4]);
}
