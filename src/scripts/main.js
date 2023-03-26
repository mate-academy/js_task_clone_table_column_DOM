'use strict';

function CloneElementOfRows(rows, from, to) {
  [...rows].forEach(row => {
    const cloneElement = row.cells[from].cloneNode(true);
    const recipientElement = row.cells[to];

    recipientElement.insertAdjacentElement('beforebegin', cloneElement);
  });
}

const tableElement = document.querySelector('table');

const {
  tHead,
  tBodies,
  tFoot,
} = tableElement;

const columnIndexToClone = 1;
const columnIndexRecipient = 4;

[tHead, ...tBodies, tFoot].forEach(({ rows }) => (
  CloneElementOfRows(rows, columnIndexToClone, columnIndexRecipient)
));
