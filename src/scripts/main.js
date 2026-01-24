'use strict';

const trs = document.querySelectorAll('tr');

trs.forEach((tr) => {
  const trArray = Array.from(tr.children);

  const th = trArray[1].cloneNode(true);

  tr.insertBefore(th, trArray[trArray.length - 1]);
});
