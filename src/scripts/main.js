'use strict';

Array.from(document.getElementsByTagName('tr'))
  .forEach(row => {
    row.children[3].after(row.children[1].cloneNode(true));
  });
