'use strict';

[...document.querySelectorAll('tr')]
  .map(i => i.lastElementChild
    .before(i.children[1].cloneNode(true)));
