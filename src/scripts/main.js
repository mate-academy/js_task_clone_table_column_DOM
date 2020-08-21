'use strict';

const clone = document.querySelectorAll('tr');

for (const item of [...clone]) {
  item.children[4].before(item.children[1].cloneNode(true));
}
