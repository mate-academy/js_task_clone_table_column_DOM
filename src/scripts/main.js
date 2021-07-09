'use strict';

const tableRow = [...document.querySelectorAll('tr')];

tableRow.map(item =>
  (item.children[4].before(item.children[1].cloneNode(true))));
