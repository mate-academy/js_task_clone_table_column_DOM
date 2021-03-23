'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  tr[i].insertBefore(tr[i].cells[1].cloneNode(true), tr[i].lastElementChild);
};
