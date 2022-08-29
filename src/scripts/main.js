'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (const cloned of rows) {
  const clone = cloned.children[1].cloneNode(true);

  cloned.children[3].after(clone);
}
