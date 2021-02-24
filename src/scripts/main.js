'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tFoot = document.querySelector('tfoot');
const tr = document.querySelectorAll('tr');

const thForCopyInHead = document.createElement('th');
const thForCopyInFoot = document.createElement('th');

const forCopyInHead = tHead.rows[0].cells[1].innerHTML;
const forCopyInFoot = tFoot.rows[0].cells[1].innerHTML;

thForCopyInHead.append(forCopyInHead);
thForCopyInFoot.append(forCopyInFoot);
tHead.rows[0].cells[4].insertAdjacentElement('beforebegin', thForCopyInHead);
tFoot.rows[0].cells[4].insertAdjacentElement('beforebegin', thForCopyInFoot);

for (let i = 0; i < tr.length - 2; i++) {
  const tdForCopy = document.createElement('td');
  const forCopyInBody = tBody.rows[i].cells[1].innerHTML;

  tdForCopy.append(forCopyInBody);
  tBody.rows[i].cells[4].insertAdjacentElement('beforebegin', tdForCopy);
}

// write your code here
