'use strict';

const trs = document.querySelectorAll('tr');

trs.forEach(tr => {
  const copyItem = tr.children[1].cloneNode(true);

  tr.insertBefore(copyItem, tr.children[4]);
});
