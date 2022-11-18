'use strict';

const rows = document.querySelectorAll('tr');

for (const item of rows) {
  const position = item.children[1];
  const copyPosition = position.cloneNode(true);

  item.children[3].after(copyPosition);
};
