'use strict';

[...document.querySelectorAll('tr')].map(
  item => item.insertBefore(
    item.children[1].cloneNode(true), item.children[4]
  ));
