'use strict';

const td = document.querySelectorAll('td');
const foot = document.querySelectorAll('tfoot tr th');
const thead = document.querySelectorAll('thead tr th');
const copyFoot = foot[1].cloneNode(true);
const copyThead = thead[1].cloneNode(true);

foot[4].before(copyFoot);
thead[4].before(copyThead);

for (let i = 1; i < td.length; i = i + 5) {
  const copyElem = td[i].cloneNode(true);

  td[i + 3].before(copyElem);
}
// write your code here
