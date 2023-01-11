'use strict';

const trElements = document.querySelectorAll('tr');

trElements.forEach((row) => {
  row.children[4].before(row.children[1].cloneNode(true));
});
