'use strict';

const data = document.querySelectorAll('tr');

for (const element of data) {
  const th = document.createElement('th');

  th.textContent = element.children[1].textContent;
  element.insertBefore(th, element.children[4]);
}
