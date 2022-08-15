'use strict';

const allRows = document.querySelectorAll('tr');

for (let i = 0; i < allRows.length; i++) {
  const target = (i === 0 || i === allRows.length - 1)
    ? document.createElement('th')
    : document.createElement('td');

  target.innerHTML = allRows[i].children[1].innerHTML;
  allRows[i].children[4].before(target);
}
