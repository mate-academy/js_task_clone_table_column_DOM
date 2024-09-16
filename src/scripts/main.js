'use strict';

document.querySelectorAll('tr')
  .forEach(element => element.children[3]
    .after(element.children[1].cloneNode(true)));
