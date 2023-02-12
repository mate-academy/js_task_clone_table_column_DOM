'use strict';

const tr = document.querySelectorAll('tr');

for (const el of tr) {
  const item = el.children[1];

  const cloneItem = item.cloneNode(true);

  el.children[3].after(cloneItem);
}
