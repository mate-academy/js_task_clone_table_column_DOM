'use strict';

const items = document.querySelectorAll('tr');

for (const item of items) {
  const newItem = item.children[1].cloneNode(true);

  item.children[4].before(newItem);
}
