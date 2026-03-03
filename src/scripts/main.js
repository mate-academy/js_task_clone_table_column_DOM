'use strict';

const table = document.querySelector('table');
const newTh = document.createElement('th');

table.tHead.rows[0].lastElementChild.before(newTh);

newTh.innerHTML = table.tHead.rows[0].cells[1].innerHTML;

const tbody = table.querySelector('tbody');
const trs = tbody.querySelectorAll('tr');

trs.forEach((tr) => {
  const newTd = document.createElement('td');

  tr.lastElementChild.before(newTd);
  newTd.innerHTML = tr.cells[1].innerHTML;
});

const tfoot = table.querySelector('tfoot');
const newTfootTh = document.createElement('th');

tfoot.rows[0].lastElementChild.before(newTfootTh);

newTfootTh.innerHTML = tfoot.rows[0].cells[1].innerHTML;
