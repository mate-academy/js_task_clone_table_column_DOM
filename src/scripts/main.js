'use strict';

const table = document.querySelector('table');

const content = [];
const title = [];

document.querySelectorAll('table tr').forEach(item => {
  if (item.querySelector('td')) {
    const td = item.querySelectorAll('td')[1];

    content.push(td.cloneNode(true));
  } else {
    const th = item.querySelectorAll('th')[1];

    title.push(th.cloneNode(true));
  }
});

let trCounter = 0;

table.querySelectorAll('tbody tr').forEach(tr => {
  tr.insertBefore(content[trCounter], tr.querySelectorAll('td')[4]);
  trCounter++;
});

table.querySelectorAll('thead tr').forEach(tr => {
  tr.insertBefore(title[0], tr.querySelectorAll('th')[4]);
});

table.querySelectorAll('tfoot tr').forEach(tr => {
  tr.insertBefore(title[1], tr.querySelectorAll('th')[4]);
});
