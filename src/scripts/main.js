'use strict';

// write your code here
const table = document.querySelector('table');

[...table.children].forEach(item => {
  const rows = [...item.children];

  rows.forEach(row => {
    const cellToCopy = row.children[1];
    const copy = cellToCopy.cloneNode(true);

    row.children[3].after(copy);
  });
});
