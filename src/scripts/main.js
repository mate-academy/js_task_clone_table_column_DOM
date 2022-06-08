'use strict';

const elemsTr = document.querySelectorAll('tr');

for (const elem of elemsTr) {
  const tr = elem.children[1];

  elem.insertBefore(tr.cloneNode(true), elem.children[4]);
}
