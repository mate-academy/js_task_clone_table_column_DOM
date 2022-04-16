'use strict';

const table = document.querySelector('table');

[...table.children].forEach(block => {
  [...block.children].forEach(tr => {
    const td = tr.children[1];

    tr.children[4].before(td.cloneNode(true));
  });
});
