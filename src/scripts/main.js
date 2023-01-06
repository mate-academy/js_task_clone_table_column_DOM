'use strict';

const table = document.querySelectorAll('tr');

for (const item of table) {
  item.children[4].before(item.children[1].cloneNode(true));
}
