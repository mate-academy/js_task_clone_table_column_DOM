'use strict';

const list = document.querySelectorAll('tr');

for (let i = 0; i < list.length; i++) {
  list[i].append(list[i].children[1].cloneNode(true), list[i].children[3]);
}
