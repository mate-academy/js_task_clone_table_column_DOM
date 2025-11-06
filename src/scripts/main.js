'use strict';

const allRows = document.querySelectorAll('tr');
const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const foot = document.querySelector('tfoot');
const allBodyTr = body.querySelectorAll('tr');
const neededItems = [];

for (const item of allRows) {
  const second = item.children[1];

  neededItems.push(second.outerHTML);
}

for (let i = 0; i < allRows.length; i++) {
  if (i === 0) {
    const headTr = head.querySelector('tr');
    const allThHead = headTr.querySelectorAll('th');
    const lastThHead = allThHead[allThHead.length - 1];

    lastThHead.insertAdjacentHTML('beforebegin', neededItems[i]);
  } else if (i === allRows.length - 1) {
    const footTr = foot.querySelector('tr');
    const allThFoot = footTr.querySelectorAll('th');
    const lastThFoot = allThFoot[allThFoot.length - 1];

    lastThFoot.insertAdjacentHTML('beforebegin', neededItems[i]);
  } else {
    const actualTr = allBodyTr[i - 1];
    const allTd = actualTr.querySelectorAll('td');
    const lastTd = allTd[allTd.length - 1];

    lastTd.insertAdjacentHTML('beforebegin', neededItems[i]);
  }
}
