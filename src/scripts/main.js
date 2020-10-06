'use strict';

const tr = [...document.querySelectorAll('tr')];

for (let i = 0; i < tr.length; i++) {
  const position = tr[i].children[1].cloneNode(true);

  tr[i].insertBefore(position, tr[i].children[4]);
}
