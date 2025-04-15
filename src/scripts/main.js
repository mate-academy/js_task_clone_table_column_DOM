'use strict';

// thead

const thElementsHead = document.querySelectorAll('thead th');
const thHead = document.createElement('th');

for (const th of thElementsHead) {
  if (th.textContent === 'Position') {
    thHead.textContent = th.textContent;
  }
}

const trHead = document.querySelector('thead tr');
const salaryThHead = trHead.querySelector('th:last-child');

trHead.insertBefore(thHead, salaryThHead);

// tfoot

const thElementsFoot = document.querySelectorAll('tfoot th');
const thFoot = document.createElement('th');

for (const th of thElementsFoot) {
  if (th.textContent === 'Position') {
    thFoot.textContent = th.textContent;
  }
}

const trFoot = document.querySelector('tfoot tr');
const salaryThFoot = trFoot.querySelector('th:last-child');

trFoot.insertBefore(thFoot, salaryThFoot);

// tbody

const trElementsPosition = document.querySelectorAll('tbody tr');

for (const row of trElementsPosition) {
  const tdBody = document.createElement('td');
  const cells = row.querySelectorAll('td');
  const position = cells[1];

  tdBody.textContent = position.textContent;

  const salaryTdBody = row.querySelector('td:last-child');

  row.insertBefore(tdBody, salaryTdBody);
}
