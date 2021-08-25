'use strict';

const list = document.querySelectorAll('tr');

for (let i = 0; i < [...list].length; i++) {
  const item = list[i].children[1];

  list[i].insertBefore(item.cloneNode(true), list[i].children[4]);
}
