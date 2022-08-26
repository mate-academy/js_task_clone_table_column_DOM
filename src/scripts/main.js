'use strict';

document.querySelectorAll('tr')
  .forEach(row => row.children[3]
    .after(row.children[1].cloneNode(true)));
