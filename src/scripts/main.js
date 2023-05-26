'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(row => {
  const copyEl = row.children[1];

  row.children[4].before(copyEl.cloneNode(true));
});
