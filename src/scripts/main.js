'use strict';

for (const tr of [...document.querySelectorAll('tr')]) {
  tr.insertBefore(tr.children[1].cloneNode(true), tr.children[4]);
};
