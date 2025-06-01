'use strict';

const rows = document.getElementsByTagName('tr');

for (let i = 0; i < rows.length; i++) {
  const lastCell = rows[i].lastElementChild;
  let newCell = document.createElement('td');

  if (i === 0) {
    newCell = document.createElement('th');
  }
  newCell.innerHTML = rows[i].firstElementChild.nextElementSibling.innerHTML;

  lastCell.before(newCell);
}
