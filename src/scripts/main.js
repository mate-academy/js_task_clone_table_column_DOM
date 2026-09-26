'use strict';

const rows = document.querySelectorAll('tr');

for (const elem of rows) {
  const copyElem = elem.children[1].cloneNode(true);

  elem.children[elem.children.length - 1].before(copyElem);
}
// write your code here
