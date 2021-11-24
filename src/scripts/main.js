'use strict';

const table = document.querySelectorAll('tr')

for (let item of table) {
  item.children[4].before(item.children[1].cloneNode(true));
}
