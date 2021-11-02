'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const trCopy = tr[i].children[1].cloneNode(true);

  tr[i].children[3].after(trCopy);
}
