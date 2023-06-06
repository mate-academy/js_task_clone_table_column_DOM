'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  const newItem = (item.rowIndex === 0 || item.rowIndex === tr.length - 1)
    ? document.createElement('th')
    : document.createElement('td');

  newItem.textContent = item.cells[1].textContent;
  item.children[4].before(newItem);
}
