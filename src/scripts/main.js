'use strict';

function CloneElementOfRow(row) {
  const cloneElement = row.cells[columnIndexToClone].cloneNode(true);
  const recipientElement = row.cells[columnIndexRecipient];

  recipientElement.insertAdjacentElement('beforebegin', cloneElement);
}

const tableElement = document.querySelector('table');

const tableHeadElement = tableElement.tHead.rows[0];
const tableBodyRowElements = tableElement.tBodies[0].rows;
const tableFootElement = tableElement.tFoot.rows[0];

const columnIndexToClone = 1;
const columnIndexRecipient = tableHeadElement.cells.length - 1;

CloneElementOfRow(tableHeadElement);
CloneElementOfRow(tableFootElement);
[...tableBodyRowElements].forEach(CloneElementOfRow);
