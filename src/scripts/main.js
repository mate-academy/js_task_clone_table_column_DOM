'use strict';

// write your code here
const secondCell = document.querySelectorAll('tr td:nth-child(2)');
secondCell.forEach((cell) => {
    const row = cell.parentElement;
    const cellCopy = cell.cloneNode(true);
    const lastTd = row.children[row.children.length - 1];
    row.insertBefore(cellCopy, lastTd);

});
