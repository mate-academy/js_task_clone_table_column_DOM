'use strict';

// write your code here
const list = document.querySelectorAll('tr');

for (const el of list) {
  const position = el.firstElementChild;
  const position1 = position.nextElementSibling;

  const cell = document.createElement(position1.tagName);

  cell.textContent = position1.textContent;
  el.insertBefore(cell, el.lastElementChild);
}
