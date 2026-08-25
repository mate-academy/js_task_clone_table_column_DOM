'use strict';

// write your code here
const strings = [...document.querySelectorAll('table tr')];

strings.forEach((str) => {
  const cells = str.children;
  const clone = cells[1].cloneNode(true);

  str.insertBefore(clone, cells[4]);
});
