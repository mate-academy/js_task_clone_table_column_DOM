'use strict';

// write your code here

const x = document.querySelector('thead');

for (const ch of x.children) {
  ch.append(ch.children[1].cloneNode(true));
  ch.insertBefore(ch.children[5], ch.children[3]);
}

const y = document.querySelector('tbody');

for (const ch of y.children) {
  ch.append(ch.children[1].cloneNode(true));
  ch.insertBefore(ch.children[5], ch.children[3]);
}

const z = document.querySelector('tfoot');

for (const ch of z.children) {
  ch.append(ch.children[1].cloneNode(true));
  ch.insertBefore(ch.children[5], ch.children[3]);
}
