'use strict';

const staffTable = document.querySelector('table');

cloneTablbeColumn(staffTable, 1, 4);

function cloneTablbeColumn(table, originIndex, insertBeforeIndex) {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const rowItems = row.children;
    const rowItem = rowItems[originIndex];

    insert(
      rowItem.tagName,
      rowItem.textContent,
      row,
      rowItems[insertBeforeIndex]
    );
  }
}

function insert(tagName, text, rowToInsert, insertBefore) {
  const element = document.createElement(tagName.toLowerCase());

  element.textContent = text;
  rowToInsert.insertBefore(element, insertBefore);
}
