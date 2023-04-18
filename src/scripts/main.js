'use strict';

const list = document.querySelectorAll('tr');

for (const item of list) {
  const elem = document.createElement(item.firstElementChild.tagName);

  elem.innerHTML = item.cells[1].innerHTML;
  item.insertBefore(elem, item.cells[item.cells.length - 1]);
}