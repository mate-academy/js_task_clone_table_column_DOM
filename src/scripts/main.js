'use strict';

const tr = document.querySelectorAll('tr');

for (const element of tr) {
  const copy = element.children[1].cloneNode(true);

  element.children[4].before(copy);
}
