'use strict';

const lists = Array.from(document.getElementsByTagName('tr'));

lists.forEach(element => {
  const clone = element.children[1].cloneNode(true);

  element.insertBefore(clone, element.children[4]);
});
