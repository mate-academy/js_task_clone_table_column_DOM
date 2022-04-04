'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const child = tr[i].children[1];
  const thClone = child.cloneNode(true);

  tr[i].children[3].after(thClone);
}
