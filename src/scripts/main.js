'use strict';

const tables = document.querySelectorAll('table');

tables.forEach((table) => {
  const thead = table.querySelector('thead tr');

  const tbody = table.querySelectorAll('tbody tr');

  const tfoot = table.querySelector('tfoot tr');

  const secondThead = thead.querySelectorAll('th')[1];
  const theadText = secondThead.textContent;
  const newThead = document.createElement('th');

  newThead.textContent = theadText;
  thead.insertBefore(newThead, thead.lastElementChild);

  const secondTfoot = thead.querySelectorAll('th')[1];
  const tfootText = secondTfoot.textContent;
  const newTfoot = document.createElement('th');

  newTfoot.textContent = tfootText;
  tfoot.insertBefore(newTfoot, tfoot.lastElementChild);

  tbody.forEach((item) => {
    const rows = item.querySelectorAll('td');

    const itemText = rows[1].textContent;
    const newItem = document.createElement('td');

    newItem.textContent = itemText;
    item.insertBefore(newItem, item.lastElementChild);
  });
});
