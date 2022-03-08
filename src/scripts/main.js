'use strict';

const tHead = document.querySelector('thead').children[0];
const tBody = document.querySelector('tbody').children;
const tFoot = document.querySelector('tfoot').children[0];

const allChilds = [tHead, tFoot, ...tBody];

for (const child of allChilds) {
  child.children[2].after(child.children[1].cloneNode(true));
}
