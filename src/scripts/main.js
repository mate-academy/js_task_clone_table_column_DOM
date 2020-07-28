'use strict';

const trList = document.querySelectorAll('tr');

for (const i in trList) {
  const newCel = trList[i].children[1].cloneNode(true);

  trList[i].insertBefore(newCel, trList[i].lastElementChild);
}
