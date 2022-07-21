'use strict';

// write your code here
const trCore = document.querySelectorAll('tr');

for (const item of trCore) {
  const tCore = item.querySelectorAll('th')[1]
    ? item.querySelectorAll('th')[1]
    : item.querySelectorAll('td')[1];

  const posCore = item.querySelectorAll('th')[3]
    ? item.querySelectorAll('th')[3]
    : item.querySelectorAll('td')[3];

  posCore.after(tCore.cloneNode(true));
}
