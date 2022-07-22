'use strict';

const table = document.querySelector('table').children;

for (const item of table) {
  for (const child of item.children) {
    child.insertBefore(child.children[1].cloneNode(true), child.children[4]);
  }
}
