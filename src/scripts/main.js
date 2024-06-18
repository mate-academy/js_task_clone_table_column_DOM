'use strict';

// write your code here
const tabRows = document.querySelectorAll('tr');

tabRows.forEach((tabRow) => {
  tabRow.children[4].before(tabRow.children[1].cloneNode(true));
});
