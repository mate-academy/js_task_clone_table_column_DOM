'use strict';

const addTableColumn = (position, from, step) => {
  const row = document.querySelectorAll('tr');
  const column = document.querySelectorAll('td');
  const head = document.querySelectorAll('th')[from];
  let count = from;

  row.forEach((item, index) => {
    if (index === 0 || index === row.length - 1) {
      item.insertCell(position).outerHTML = `<th>${head.innerText}</th>`;
    } else {
      item.insertCell(position).innerText = column[count].innerText;
      count += step;
    }
  });
};

addTableColumn(4, 1, 5);
