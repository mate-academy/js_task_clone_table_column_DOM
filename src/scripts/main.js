'use strict';

// There is a function for the common cases above
// The function allows us to copy any column
// and paste it to any place in the table
// You should pass the table, column to copy and column
// after which the clone should be pasted
// The numbers of columns start from 1 as usual users count, not from 0
// If to the newPosition passed 0 it means to paste before the first column
// If to the newPositison passed negative number or too big number
// the clone would be pasted to the end of table
// If to the copiedColumnNumber passed wrong number
// the function would take the first one

function CloneAndPasteTableColumn(
  table, copiedColumnNumber = 1, newPosition = 1) {
  let copiedCell;
  let newSell;
  let cutSell;
  let columnForCopy;
  let newColumnPosition;

  if (!table) {
    alert('There is no table to change!');

    return 0;
  }

  if (copiedColumnNumber < 1
    || copiedColumnNumber > table.rows[0].cells.length) {
    columnForCopy = 1;
  } else {
    columnForCopy = copiedColumnNumber;
  }

  if (newPosition < 0 || newPosition > table.rows[0].cells.length) {
    newColumnPosition = table.rows[0].cells.length;
  } else {
    newColumnPosition = newPosition;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const cellsArray = table.rows[i].cells;

    copiedCell = cellsArray[columnForCopy - 1].innerHTML;

    if (table.rows[i].cells[0].tagName === 'TH') {
      newSell = document.createElement('th');
    } else {
      newSell = document.createElement('td');
    }

    newSell.innerHTML = copiedCell;

    table.rows[i].append(newSell);

    const indexOfPastingFromTheEnd
    = cellsArray.length - newColumnPosition - 1;

    for (let j = 0; j < indexOfPastingFromTheEnd; j++) {
      cutSell = cellsArray[newColumnPosition];
      table.rows[i].append(cutSell);
    }
  };
}

const myTable = document.querySelector('table');

CloneAndPasteTableColumn(myTable, 2, 4);

// The solution exactly for our case is below

/* const myTable = document.querySelector('table');
let copiedCell;
let newSell;
let cutSell;

for (let i = 0; i < myTable.rows.length; i++) {
  copiedCell = myTable.rows[i].cells[1].innerHTML;

  if (myTable.rows[i].cells[0].tagName === 'TH') {
    newSell = document.createElement('th');
  } else {
    newSell = document.createElement('td');
  }

  newSell.innerHTML = copiedCell;

  myTable.rows[i].append(newSell);

  cutSell = myTable.rows[i].cells[myTable.rows[i].cells.length - 2];
  myTable.rows[i].append(cutSell);
}; */
