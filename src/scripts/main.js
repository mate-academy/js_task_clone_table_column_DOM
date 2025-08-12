'use strict';

// write your code here
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

const positionTypeHead = thead.rows[0].cells[1].cloneNode(true);
const positionTypeFoot = tfoot.rows[0].cells[1].cloneNode(true);

thead.rows[0].cells[4].before(positionTypeHead);
tfoot.rows[0].cells[4].before(positionTypeFoot);

const rows = tbody.rows;

for (let i = 0; i < rows.length; i++) {
  const employeePosition = tbody.rows[i].cells[1].cloneNode(true);

  tbody.rows[i].cells[4].before(employeePosition);
}
