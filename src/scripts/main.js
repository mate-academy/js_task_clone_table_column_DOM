'use strict';

const rows = [...document.querySelectorAll('tr')];
let clone;

rows.forEach(el => {
  clone = el.children[1].cloneNode(true);

  const copyRows = [...el.children];

  copyRows.splice(4, 0, clone);
  el.append(...copyRows);
});
