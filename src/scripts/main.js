'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const rowCollection = [...rows];

for (const row of rowCollection) {
  const data = [...row.cells];
  const newElement
    = data[0].innerText === 'Name'
      ? document.createElement('th')
      : document.createElement('td');

  newElement.textContent = (data[1].innerText);

  row.insertBefore(newElement, row.children[4]);
}
