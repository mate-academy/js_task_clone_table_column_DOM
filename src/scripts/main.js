'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(item => {
  item.append(item.children[1].cloneNode(true));
  item.insertBefore(item.children[5], item.children[4]);
});
