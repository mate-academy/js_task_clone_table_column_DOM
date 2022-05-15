'use strict';

const tableRows = [...document.querySelectorAll('tr')];
const positions = tableRows.map(item => [...item.children][1]);

for (let i = 0; i < positions.length; i++) {
  const tableBorder = i === 0 || i === positions.length - 1;
  const cell = tableBorder
    ? document.createElement('th')
    : document.createElement('td');

  cell.innerText = positions[i].innerText;
  tableRows[i].children[4].before(cell);
}
