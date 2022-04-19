'use strict';

const table = document.querySelectorAll('tr');

for (const elem of table) {
  elem.children[4].before(elem.children[1].cloneNode(true));
};
