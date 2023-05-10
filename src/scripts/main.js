'use strict';

// function for counting columns in a table
function countOfColumns(tableElem) {
  return tableElem.rows[0].childElementCount;
}

// function of copying the desired column from the table
function copyTableColumn(tableElem, columnPos) {
  // if you pass an index that exceeds the number of columns,
  // it returns an empty array
  if (columnPos >= countOfColumns(tableElem) || columnPos < 0) {
    return [];
  }

  // we copy the elements of the desired column, so that these
  // elements do not refer to the elements of the copied column
  const targetColumnCopy = [...tableElem.rows].map(row => {
    return row.cells[columnPos].cloneNode(true);
  });

  return targetColumnCopy;
}

// function to insert a certain column into a table by the column index
function pasteTableColumn(tableElem, columnElem, insertPos) {
  // if the copy of the column did not happen and an empty array came,
  // then do not insert anything into the table
  if (columnElem.length === 0) {
    return;
  }

  const columnsCount = countOfColumns(tableElem);

  // we check for the correct index for inserting a column
  // (if the index is less than 0, we still insert the column
  // at the beginning of the table, if the index is greater
  // than the number of columns in the table, we still insert
  // it at the end of the table)
  const insertIdx = insertPos <= 0
    ? 0 : insertPos >= columnsCount
      ? columnsCount - 1 : insertPos;

  for (let i = 0; i < columnElem.length; i++) {
    const currentRow = tableElem.rows[i];
    const currentCell = currentRow.cells[insertIdx];

    // if you want to insert it at the end of the table,
    // use the after method for the last column of the table,
    // otherwise insert the column before the other one
    if (insertPos >= columnsCount) {
      currentCell.after(columnElem[i]);
      continue;
    }

    currentCell.before(columnElem[i]);
  }
}

const table = document.querySelector('table');
const column = copyTableColumn(table, 1);

// we paste the copied column before the last column in the table
pasteTableColumn(table, column, countOfColumns(table) - 1);
