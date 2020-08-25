'use strict';

const tr = [...document.querySelectorAll('tr')];

for (const a of tr) {
  a.append(a.children[1].cloneNode(true));
  a.append(a.children[4]);
}
