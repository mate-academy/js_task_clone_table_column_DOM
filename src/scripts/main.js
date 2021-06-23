'use strict';

// write your code here
const table = document.querySelectorAll('tr');

table.forEach((item) => {
  const td = document.createElement('td');

  td.innerHTML = item.children[1].textContent;
  item.children[4].before(td);
});
