'use strict';

// write your code here

const trAll = document.querySelectorAll('tr');

for (let i = 0; i < trAll.length; i++) {
  trAll[i].insertBefore(trAll[i].children[1].cloneNode(true),
    trAll[i].children[4]);
}
