'use strict';

const allEl = document.querySelectorAll('tr');

for (let i = 0; i < allEl.length; i++) {
  const element = (i === 0 || i === allEl.length - 1)
    ? document.createElement('th')
    : document.createElement('td');

  element.innerHTML = allEl[i].children[1].innerHTML;
  allEl[i].children[4].before(element);
}
