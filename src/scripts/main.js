'use strict';

// write your code here
const thead = document.querySelector('thead tr');
const tbody = document.querySelectorAll('tbody tr');
const tfoot = document.querySelector('tfoot tr');

const thHead = document.createElement('th');
const thFoot = document.createElement('th');

thHead.innerHTML = 'Position';
thFoot.innerHTML = 'Position';

thead.children[4].before(thHead);
tfoot.children[4].before(thFoot);

tbody.forEach((item) => {
  const td = document.createElement('td');

  td.innerHTML = item.children[1].textContent;
  item.children[4].before(td);
});
