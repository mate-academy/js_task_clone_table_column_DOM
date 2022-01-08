'use strict';

// write your code here
const trs = [...document.querySelectorAll('tr')];

trs.map(el => {
  const children = [...el.children];
  const positionCopy = document.createElement(children[1].tagName);

  positionCopy.textContent = children[1].textContent;

  const lastChild = children[children.length - 1];

  lastChild.before(positionCopy);
}
);
