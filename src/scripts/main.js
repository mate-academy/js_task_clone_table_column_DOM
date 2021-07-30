'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  tr[i].cells[4].before(tr[i].children[1].cloneNode(true));
}
