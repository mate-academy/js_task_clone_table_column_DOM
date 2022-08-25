'use strict';

document.querySelectorAll('tr')
  .forEach(element => element.children[4]
    .before(element.children[1].cloneNode(true)));
