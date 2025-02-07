'use strict';

const trElements = document.querySelectorAll('tr');

trElements.forEach((el) => {
  const cloneElement = el.children[1].cloneNode(true);

  el.lastElementChild.before(cloneElement);
});
