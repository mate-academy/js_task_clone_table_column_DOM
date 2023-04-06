'use strict';

const trsBody = document.querySelectorAll('tbody > tr');

for (const tr of trsBody) {
  const tdAdd = document.createElement('td');

  tdAdd.textContent = tr.children[1].textContent;

  tr.children[4].before(tdAdd.cloneNode(true));
};

const trsHeadFoot = document.querySelectorAll('thead > tr,tfoot > tr ');

for (const tr of trsHeadFoot) {
  const thAdd = document.createElement('th');

  thAdd.textContent = tr.children[1].textContent;

  tr.children[4].before(thAdd.cloneNode(true));
};
