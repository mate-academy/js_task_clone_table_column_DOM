'use strict';

const tableRows = [...document.querySelector('table').rows];

tableRows.forEach(element => {
  element.children[3].after(element.children[1].cloneNode(true));
});
