'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
const cells = row.querySelectorAll('td');
const secondCell = cells[1];
const newElement = cells[cells.length - 1];
const copy = secondCell.cloneNode(true);
row.insertBefore(copy, newElement);
})

