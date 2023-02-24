'use strict';

const table = [...document.querySelectorAll('tr')];

table.forEach(el => {
  const copy = el.children[1].cloneNode(true);

  el.insertBefore(copy, el.children[4]);
});
