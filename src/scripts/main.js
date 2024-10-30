'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

for (const item of tr) {
  let move = document.createElement('item.tagName');

  move = item.children[1].cloneNode(true);
  item.lastElementChild.insertAdjacentElement('beforebegin', move);
}
