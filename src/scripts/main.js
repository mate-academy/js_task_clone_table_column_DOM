'use strict';

const rows = document.querySelectorAll('tr');

[...rows].map(elem =>
  elem.insertBefore(elem.children[1].cloneNode(true), elem.children[4]));
