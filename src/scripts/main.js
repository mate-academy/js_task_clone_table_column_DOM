'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const secondItem = tr[i].children[1].cloneNode(true);
  const lastItem = tr[i].lastElementChild;

  lastItem.remove();

  tr[i].appendChild(secondItem);
  tr[i].appendChild(lastItem);
}
