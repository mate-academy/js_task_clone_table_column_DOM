'use strict';

const table = document.querySelector('table');

const tableHead = table.querySelector('thead').querySelector('tr');
const tableBody = table.querySelector('tbody').querySelectorAll('tr');
const tableFoot = table.querySelector('tfoot').querySelector('tr');

const th = document.createElement('th');

th.innerText = tableHead.children[1].innerHTML;
tableHead.children[4].before(th);

const tf = document.createElement('th');

tf.innerText = tableFoot.children[1].innerHTML;
tableFoot.children[4].before(tf);

tableBody.forEach(tr => {
  const td = document.createElement('td');

  td.innerText = tr.children[1].innerHTML;
  tr.children[4].before(td);
});
