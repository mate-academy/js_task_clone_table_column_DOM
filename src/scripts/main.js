'use strict';

const items = document.querySelectorAll('tr');

for (const item of items) {
  const copyItem = item.children[1];

  item.children[4].before(copyItem.cloneNode(true));
}
