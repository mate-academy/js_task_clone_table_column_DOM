'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(i => {
  i.insertBefore(i.children[1].cloneNode(true), i.children[4]);
});
