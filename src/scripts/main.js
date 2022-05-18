'use strict';

const body = document.querySelector('tbody');
let count = body.rows.length;

for (let i = 0; i < count; i++) {
  const tdBody = document.createElement('td');
  const perm = body.rows[i].cells[4].textContent;

  body.rows[i].cells[4].textContent = body.rows[i].cells[1].textContent;
  tdBody.textContent = perm;

  body.rows[i].append(tdBody);
}

const head = document.querySelector('thead');

count = head.rows.length;

for (let i = 0; i < count; i++) {
  const thHead = document.createElement('th');
  const perm = head.rows[i].cells[4].textContent;

  head.rows[i].cells[4].textContent = head.rows[i].cells[1].textContent;
  thHead.textContent = perm;

  head.rows[i].append(thHead);
}

const foot = document.querySelector('tfoot');

count = foot.rows.length;

for (let i = 0; i < count; i++) {
  const thFoot = document.createElement('th');
  const perm = foot.rows[i].cells[4].textContent;

  foot.rows[i].cells[4].textContent = foot.rows[i].cells[1].textContent;
  thFoot.textContent = perm;

  foot.rows[i].append(thFoot);
}
