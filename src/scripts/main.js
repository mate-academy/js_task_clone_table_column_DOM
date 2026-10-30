'use strict';

const headRows = document.querySelector('table thead tr');
const headCells = headRows.querySelectorAll('th');
updateRow(headCells, headRows);

const rowsContent = document.querySelectorAll('table tbody tr');

rowsContent.forEach(row => {
    const cells = row.querySelectorAll('td');
    updateRow(cells, row);
});

const footRows = document.querySelector('table tfoot tr');
const footCells = footRows.querySelectorAll('th');
updateRow(footCells, footRows);

function updateRow(cells, row) {
    const lastCell = cells[cells.length - 1];
    const secondCell = cells[1];
    row.insertBefore(secondCell.cloneNode(true), lastCell);
}