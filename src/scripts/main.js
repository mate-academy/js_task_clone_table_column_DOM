'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

for (let index = 0; index < tr.length; index++) {
  const clone = document.createElement(`${tr[index].children[1].tagName}`);

  clone.innerHTML = tr[index].children[1].innerHTML;
  tr[index].insertBefore(clone, tr[index].children[4]);
}
