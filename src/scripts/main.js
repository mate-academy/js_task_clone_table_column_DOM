'use strict';

const tr = [...document.querySelectorAll('tr')];

const thHead = tr[0].querySelectorAll('th')[1];
const cloneThHead = thHead.cloneNode(true);
const newTh = document.createElement('th');

newTh.textContent = cloneThHead.textContent;
tr[0].insertBefore(newTh, tr[0].children[tr[0].children.length - 1]);

const thFoot = tr[tr.length - 1].querySelectorAll('th')[1];
const cloneThFoot = thFoot.cloneNode(true);
const newTf = document.createElement('th');

newTf.textContent = cloneThFoot.textContent;

tr[tr.length - 1].insertBefore(
  newTf,
  tr[tr.length - 1].children[tr[tr.length - 1].children.length - 1],
);

tr.forEach((item) => {
  const tdBody = item.querySelectorAll('td')[1];

  if (tdBody) {
    const cloneTdBody = tdBody.cloneNode(true);
    const newTd = document.createElement('td');

    newTd.textContent = cloneTdBody.textContent;
    item.insertBefore(newTd, item.children[item.children.length - 1]);
  }
});
