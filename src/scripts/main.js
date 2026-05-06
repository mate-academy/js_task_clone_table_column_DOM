'use strict';

// write your code here
const column = [...document.querySelectorAll('tr')];

column.forEach((item) => {
  const clone = item.children[1].cloneNode(true);

  item.children[item.children.length - 1].before(clone);
});
