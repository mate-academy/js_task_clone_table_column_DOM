'use strict';

const tr = document.querySelectorAll('tr');

for (const key of tr) {
  key.insertBefore(key.children[1].cloneNode(true),
    key.children[key.children.length - 1]);
};
