'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(row => {
  row.children[3].after(row.children[1].cloneNode(true));
});
