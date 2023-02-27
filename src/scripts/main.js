'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  const newElement = item.children[1];

  item.children[3].after(newElement.cloneNode(true));
}
