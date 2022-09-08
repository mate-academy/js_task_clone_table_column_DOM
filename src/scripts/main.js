'use strict';

const allTr = document.querySelectorAll('tr');

for (let i = 0; i < allTr.length; i++) {
  const element = (i === 0 || i === allTr.length - 1)
    ? document.createElement('th')
    : document.createElement('td');

  element.innerHTML = allTr[i].children[1].innerHTML;
  allTr[i].children[4].before(element);
}
