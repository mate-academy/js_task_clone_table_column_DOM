'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const pos = tr[i].children[1].cloneNode(true);

  tr[i].insertBefore(pos, tr[i].children[4]);
}
