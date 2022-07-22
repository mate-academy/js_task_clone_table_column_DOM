'use strict';

const tableInfo = document.querySelectorAll('tr');

tableInfo.forEach(item => {
  item.children[4].before(item.children[1].cloneNode(true));
});
