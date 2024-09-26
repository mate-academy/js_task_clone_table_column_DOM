'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cellToCopy = row.children[1];

  row.children[3].after(cellToCopy.cloneNode(true));
});
