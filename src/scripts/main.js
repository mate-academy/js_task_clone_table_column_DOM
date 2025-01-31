'use strict';

// original table
const tableToCopy = document.querySelector('table');
// all ths in thead
const tableToCopyHeadTh = tableToCopy.querySelectorAll('thead th');
// all trs in tbody
const tableToCopyRows = tableToCopy.querySelectorAll('tbody tr');

// new table
const newTable = document.createElement('table');
// thead of new table
const newTableHead = document.createElement('thead');
// tr of new table
const newTableHeadTr = document.createElement('tr');

// copying ths from thead of original table to thead of new table
for (const th of tableToCopyHeadTh) {
  const newTh = document.createElement('th');

  newTh.textContent = th.textContent;
  newTableHeadTr.append(newTh);
}

// new th for copied column
const copiedTh = document.createElement('th');
// get list of all ths in new table thead
const allThInHead = newTableHeadTr.querySelectorAll('th');

// copy text and add new column
copiedTh.textContent = allThInHead[1].textContent;
allThInHead[allThInHead.length - 1].before(copiedTh);

// add created tr to thead
newTableHead.append(newTableHeadTr);

// create tbody
const newTableBody = document.createElement('tbody');

// copy rows from original table and add copied column
for (const row of tableToCopyRows) {
  const newRow = document.createElement('tr');

  for (const column of row.querySelectorAll('td')) {
    const newColumn = document.createElement('td');

    newColumn.textContent = column.textContent;
    newRow.append(newColumn);
  }

  const columnsInRow = newRow.querySelectorAll('td');
  const columnToCopy = document.createElement('td');

  columnToCopy.textContent = columnsInRow[1].textContent;
  columnsInRow[columnsInRow.length - 1].before(columnToCopy);
  newTableBody.append(newRow);
}

// create tfoot
const newTableFoot = document.createElement('tfoot');
// create tr
const newTableFootTr = document.createElement('tr');

// copy ths from thead to tfoot
for (const th of newTableHeadTr.querySelectorAll('th')) {
  const newTh = document.createElement('th');

  newTh.textContent = th.textContent;
  newTableFootTr.append(newTh);
}
// add tr to tfoot
newTableFoot.append(newTableFootTr);

newTable.append(newTableHead);
newTable.append(newTableBody);
newTable.append(newTableFoot);

tableToCopy.after(newTable);
