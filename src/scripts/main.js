'use strict';

const tr = document.querySelectorAll('tr');

const trArr = Array.from(tr);

for (let i = 0; i < trArr.length; i++) {
  const line = trArr[i].children;

  const clone = line[1].cloneNode(true);

  trArr[i].insertBefore(clone, line[line.length - 1]);
}
