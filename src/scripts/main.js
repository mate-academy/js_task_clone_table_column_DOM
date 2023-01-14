'use strict';

const tabletTr = document.querySelectorAll('tr');

tabletTr.forEach(element => {
  const elementClone = element.children[1].cloneNode(true);

  element.lastElementChild.before(elementClone);
});
