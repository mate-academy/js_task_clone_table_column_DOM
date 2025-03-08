'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((t) => {
  const copy = t.children[1].cloneNode(true);

  t.children[3].after(copy);
});
