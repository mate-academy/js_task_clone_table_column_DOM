'use strict';

const trList = document.querySelectorAll('tr');

trList.forEach((el) => {
  const thList = el.children;

  const elClone = thList[1].cloneNode(true);

  thList[thList.length - 1].insertAdjacentElement('beforebegin', elClone);
});
