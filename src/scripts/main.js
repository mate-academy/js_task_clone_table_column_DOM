'use strict';

const tr = [...document.querySelectorAll('tr')];

tr.forEach(el => {
  const position = el.children[1];

  el.children[4].before(position.cloneNode(true));
});
