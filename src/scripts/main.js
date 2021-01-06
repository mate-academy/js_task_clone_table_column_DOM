'use strict';

const tr = document.querySelectorAll('tr');

const trArray = [...tr];

for (let i = 0; i < trArray.length; i++) {
  tr[i].append(trArray[i].children[1].cloneNode(true));

  tr[i].append(trArray[i].children[4]);
}
