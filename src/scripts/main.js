'use strict';

const table = document.querySelector('table');

for (const item of table.rows) {
  item.children[3].after(item.children[1].cloneNode(true));
}
