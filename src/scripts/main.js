'use strict';

const row = document.querySelectorAll('tr');

row.forEach(item => {
  const col = item.children[1].cloneNode(true);

  item.insertBefore(col, item.children[4]);
});
