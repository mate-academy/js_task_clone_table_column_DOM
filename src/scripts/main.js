'use strict';

const records = document.querySelectorAll('tr');

for (const record of records) {
  const itemCopy = document.createElement('td');

  itemCopy.innerText = record.children[1].innerText;

  record.insertBefore(itemCopy, record.children[4]);
}
