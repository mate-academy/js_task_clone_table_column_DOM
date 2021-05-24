'use strict';

const tr = [...document.querySelectorAll('tr')];

for (let i = 0; i < tr.length; i++) {
  tr[i].children[4].before(tr[i].children[1].cloneNode(true));
}
