'use strict';

// write your code here
const trs = [...document.querySelectorAll('tr')];

trs.map(el => {
  const children = [...el.children];
  const lastChild = children[children.length - 1];

  lastChild.before(children[1].cloneNode(true));
}
);
