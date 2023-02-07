'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(item => {
  const cloneElements = item.children[1].cloneNode(true);

  item.children[4].before(cloneElements);
});
