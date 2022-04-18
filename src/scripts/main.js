'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const clone = row.children[1].cloneNode(true);

  row.children[3].insertAdjacentElement('afterend', clone);
}
