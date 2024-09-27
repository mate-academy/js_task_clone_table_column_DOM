'use strict';

// write your code here

const table = document.querySelectorAll('tr');

for (const ch of table) {
  ch.append(ch.children[1].cloneNode(true));
  ch.insertBefore(ch.children[5], ch.children[3]);
}
