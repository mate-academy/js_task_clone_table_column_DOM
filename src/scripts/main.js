'use strict';

const table = document.querySelector('table');

function cloneColumnFromTable(tableName, numberColumn) {
  const tableRows = [...tableName.querySelectorAll('tr')];
  const arrList = tableRows.map((elem) => {
    return elem.children[numberColumn - 1];
  });

  return arrList;
}

function addColumnToTable(tableName, columnArr, position) {
  const column = [...columnArr];

  for (let i = 0; i < tableName.rows.length; i++) {
    // tableName.rows[i].cells[position].after(column[i]);

    tableName.rows[i].cells[position].insertAdjacentHTML(
      'afterbegin',
      column[i],
    );
  }
}

const columnFromTable = cloneColumnFromTable(table, 2);

addColumnToTable(table, columnFromTable, 2);
// eslint-disable-next-line no-console
console.log(columnFromTable);
