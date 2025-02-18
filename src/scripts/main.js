'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
const copyTheadPosition = thead.rows[0].cells[1].cloneNode(true);
const copyTfootPosition = tfoot.rows[0].cells[1].cloneNode(true);
const allPosition = [...tbody.rows];

allPosition.forEach((row) => {
  row.insertBefore(row.cells[1].cloneNode(true), row.lastElementChild);
});

thead.rows[0].insertBefore(copyTheadPosition, thead.rows[0].lastElementChild);
tfoot.rows[0].insertBefore(copyTfootPosition, tfoot.rows[0].lastElementChild);
