'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(one => {
  const copy = one.children[1].cloneNode(true);

  one.children[4].before(copy);
});
