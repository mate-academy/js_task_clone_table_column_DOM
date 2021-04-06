'use strict';

const trNode = document.querySelectorAll('tr');
const trArr = Array.from(trNode);

for (let i = 0; i < trArr.length; i++) {
  trNode[i].children[4].before(trNode[i].children[1].cloneNode(true));
}
