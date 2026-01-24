'use strict';

const trs = document.querySelectorAll('tr');

trs.forEach((tr) => {
  const trArray = Array.from(tr.children);

  const th = document.createElement('th');

  th.textContent = trArray[1].textContent;

  tr.insertBefore(th, trArray[trArray.length - 1]);
});
