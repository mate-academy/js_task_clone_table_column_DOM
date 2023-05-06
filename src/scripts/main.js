'use strict';

const tr = document.querySelectorAll('tr');

[...tr].map(element => {
  const child = element.children[1];
  const childClone = child.cloneNode(true);

  element.children[4].before(childClone);
});
