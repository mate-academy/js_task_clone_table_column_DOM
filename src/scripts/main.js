'use strict';

const staffTable = document.querySelector('table');

cloneTablbeColumn(staffTable, 1, 4);

function cloneTablbeColumn(table, originIndex, insertBeforeIndex) {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const rowItems = row.children;
    const rowItem = rowItems[originIndex];

    if (rowItem.tagName === 'TH') {
      const th = document.createElement('th');

      th.textContent = rowItem.textContent;
      row.insertBefore(th, rowItems[insertBeforeIndex]);
    }

    if (rowItem.tagName === 'TD') {
      const td = document.createElement('td');

      td.textContent = rowItem.textContent;
      row.insertBefore(td, rowItems[insertBeforeIndex]);
    }
  }
}
