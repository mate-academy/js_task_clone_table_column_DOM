'use strict';

// write your code here

const trs = [...document.getElementsByTagName('tr')];

for (let i = 0; i < trs.length; i++) {
  const tds = [...trs[i].children];

  const td = document.createElement('td');

  td.textContent = tds[1].textContent;

  trs[i].insertBefore(td, tds[4]);
}
