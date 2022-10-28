'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((item) => {
  item.children[4].before(item.children[1].cloneNode(true));
});
