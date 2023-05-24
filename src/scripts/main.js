'use strict';

const tbody = document.querySelector('tbody');

const tr = tbody.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const row = tr[i];

  const td = row.getElementsByTagName('td');

  const position = td[1].innerText;

  const newTd = document.createElement('td');

  newTd.innerText = position;

  const lastElement = row.lastElementChild;

  row.insertBefore(newTd, lastElement);
}

const thead = document.querySelector('thead');

const trOfThead = thead.querySelector('tr');

const th = trOfThead.querySelectorAll('th')[1];

const lastTh = trOfThead.lastElementChild;

const newTh = document.createElement('th');

newTh.innerText = th.innerText;

trOfThead.insertBefore(newTh, lastTh);

const tfoot = document.querySelector('tfoot');

const trOfTfoot = tfoot.querySelector('tr');

const thF = trOfTfoot.querySelectorAll('th')[1];

const lastElementTf = trOfTfoot.lastElementChild;

const newThF = document.createElement('th');

newThF.innerText = thF.innerText;

trOfTfoot.insertBefore(newThF, lastElementTf);
