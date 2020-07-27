'use strict';

// write your code here

const tr = document.querySelectorAll('tr');

for (const element of tr) {
  const clone = element.children[1].cloneNode(true);

  element.insertBefore(clone, element.children[4]);
}
