'use strict';

const table = document.querySelector('table');

function cloneColumnFromTable(tableName, numberColumn) {
  const tableRows = [...tableName.querySelectorAll('tr')];
  const arrList = tableRows.map((elem) => {
    return elem.children[numberColumn - 1];
  });

  return arrList;
}

// function addColumnToTable(tableName, columnArr, position) {}

const columnFromTable = cloneColumnFromTable(table, 2);

console.log(columnFromTable);
