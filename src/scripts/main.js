'use strict';

// write your code here

const rows = document.querySelectorAll('table tr');

for (const row of rows) {
  const clone = row.children[1].cloneNode(true);

  row.children[3].after(clone);
}
