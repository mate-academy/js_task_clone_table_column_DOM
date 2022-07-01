'use strict';
// write your code here

const theadArray = [...document.querySelectorAll(`thead tr th`)];
const tfootArray = [...document.querySelectorAll(`tfoot tr th`)];
const tbodyArray = document.querySelectorAll(`tbody tr`);

const tablesHandler = (copyTable, copiedTable) => {
  const table = copyTable.cloneNode(true);

  copiedTable.insertAdjacentElement(`afterend`, table);
};

tablesHandler(theadArray[1], theadArray[3]);

tbodyArray.forEach(el => {
  tablesHandler(el.children[1], el.children[3]);
});

tablesHandler(tfootArray[1], tfootArray[3]);
