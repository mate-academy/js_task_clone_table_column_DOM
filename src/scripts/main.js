'use strict';

const item = document.querySelectorAll('tr');

item.forEach(el => {
  const position = el.children[1];
  const last = el.lastElementChild;

  last.before(position.cloneNode(true));
});
