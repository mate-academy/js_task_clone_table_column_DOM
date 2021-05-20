'use strict';

const list = document.querySelectorAll('tr');

for (let i = 0; i < [...list].length; i++) {
  const row = list[i];

  const item = document.createElement(list[i].firstElementChild.tagName);

  item.innerHTML = row.cells[1].innerHTML;
  row.insertBefore(item, row.cells[row.cells.length - 1]);
}
