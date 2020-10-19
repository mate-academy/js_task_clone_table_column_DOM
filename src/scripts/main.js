'use strict';

// write your code here

const tr = document.querySelectorAll('tr');

for (const row in [...tr]) {
  const second = tr[row].children[1];
  const clone = second.cloneNode(true);

  tr[row].children[3].insertAdjacentElement('afterend', clone);
}
