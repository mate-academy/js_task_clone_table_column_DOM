'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const position = row.children[1];

  const newColumn = position.cloneNode(true);

  row.children[3].after(newColumn);
});
