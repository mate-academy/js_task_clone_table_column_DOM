'use strict';

// write your code here
const rows = [...document.getElementsByTagName('tr')];

for (const item of rows) {
  item.children[4].before(item.children[1].cloneNode(true));
}
