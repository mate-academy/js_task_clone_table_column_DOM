'use strict';

const tableData = document.querySelectorAll('td');

const selectorsToRender = ['thead > tr', 'tfoot > tr'];

selectorsToRender.forEach(selector => {
  const thToInsert = document.createElement('th');

  thToInsert.innerText = 'Position';

  document.querySelector(selector).children[3].after(thToInsert);
});

const dataToRender = [];

for (let i = 1; i < tableData.length; i += 5) {
  dataToRender.push(tableData[i].textContent);
}

[...document.querySelector('tbody').children]
  .forEach((el, idx) => {
    const td = document.createElement('td');

    td.textContent = dataToRender[idx];

    el.children[3].after(td);
  });
