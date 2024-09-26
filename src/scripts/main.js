'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  tr[i].children[3].after(tr[i].children[1].cloneNode(true));
}
