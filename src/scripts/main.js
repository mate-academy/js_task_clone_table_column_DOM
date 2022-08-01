'use strict';

// write your code her

const rows = document.querySelectorAll('tr');

for (const prop of rows) {
  prop.children[4].before(prop.children[1].cloneNode(true));
}
