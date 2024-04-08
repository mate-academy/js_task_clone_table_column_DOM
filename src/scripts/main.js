'use strict';

const thead = document.querySelector('thead').querySelector('tr');
const tfoot = document.querySelector('tfoot').querySelector('tr');
const tbodytr = document.querySelector('tbody').querySelectorAll('tr');

const newHeader = document.createElement('th');

newHeader.textContent = 'Position';

const newFooter = document.createElement('th');

newFooter.textContent = 'Position';

thead.insertBefore(newHeader, thead.lastElementChild);
tfoot.insertBefore(newFooter, tfoot.lastElementChild);

tbodytr.forEach((item) => {
  const bodytTh = document.createElement('td');

  bodytTh.textContent = item.cells[1].innerText;
  item.insertBefore(bodytTh, item.lastElementChild);
});
