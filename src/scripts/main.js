'use strict';

const root = document.querySelectorAll('tr');

for (let i = 0; i < root.length; i++) {
  root[i].insertBefore(root[i].children[1].cloneNode(true),
    root[i].children[4]);
}
