'use strict';

const tr = document.querySelectorAll('tr');
const th = document.createElement('th');
const thFoot = document.createElement('th');

th.innerHTML = tr[0].children[1].innerHTML;
tr[0].insertBefore(th, tr[0].children[4]);

const lastEl = tr.length - 1;

thFoot.innerHTML = tr[lastEl].children[1].innerHTML;
tr[lastEl].insertBefore(thFoot, tr[lastEl].children[4]);

for (let i = 1; i < tr.length - 1; i++) {
  const td = document.createElement('td');

  td.innerHTML = tr[i].children[1].innerHTML;

  tr[i].insertBefore(td, tr[i].children[4]);
}
