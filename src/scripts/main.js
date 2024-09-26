'use strict';

// write your code here
const table = document.querySelectorAll('tr');

for (let i = 0; i < table.length; i++) {
  const clone = table[i].children[1].cloneNode(true);

  table[i].children[3].after(clone);
}
