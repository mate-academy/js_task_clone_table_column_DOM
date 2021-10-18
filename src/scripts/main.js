'use strict';

const rows = document.querySelectorAll('tr');

[...rows].forEach(row => {
  const clone = [...row.children][1].cloneNode(true);

  row.children[4].before(clone);
});
