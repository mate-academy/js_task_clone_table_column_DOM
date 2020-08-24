'use strict';

[...document.querySelectorAll('tr')].forEach(tr => {
  const position = tr.children[1];
  const lastElement = tr.children[tr.children.length - 1];

  lastElement.before(position.cloneNode(true));
});
