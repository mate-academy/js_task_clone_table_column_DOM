'use strict';

const trTable = document.querySelectorAll('tr');

[...trTable].map(rous => {
  const child = rous.children[1];
  const childClone = child.cloneNode(true);

  rous.children[4].before(childClone);
});
