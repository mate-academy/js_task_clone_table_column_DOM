'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((el) => {
  el.children[4].before(el.children[1].cloneNode(true));
});
