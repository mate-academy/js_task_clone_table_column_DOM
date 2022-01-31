'use strict';

const row = document.querySelectorAll('tr');

for (let i = 0; i < row.length; i++) {
  const item = row[i].children[1].textContent;

  row[i].children[3].insertAdjacentHTML('beforebegin', `<td>${item}</td>`);
}
