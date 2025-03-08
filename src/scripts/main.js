'use strict';

const body = document.body;
const table = body.querySelector('table');
const tableChilds = Array.from(table.children);

tableChilds.forEach((item) => {
  const arrayTr = Array.from(item.children);

    arrayTr.forEach((tr) => {
      let element;

      if (item === tableChilds[1]){
        element = document.createElement('td')
      } else {
        element = document.createElement('th')
      }

      element.textContent = tr.children[1].textContent
      tr.insertBefore(element, tr.lastChild)
    })
})
