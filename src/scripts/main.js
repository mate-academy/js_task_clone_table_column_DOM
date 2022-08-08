'use strict';

const trTagList = document.querySelectorAll('tr');

[...trTagList].map(elem =>
  elem.insertBefore(elem.children[1].cloneNode(true), elem.children[4]));
