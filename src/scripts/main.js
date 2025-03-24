'use strict';

// write your code here
const list = document.querySelectorAll('tr');

for (const el of list) {
  el.children[4].before(el.children[1].cloneNode(true));
}
