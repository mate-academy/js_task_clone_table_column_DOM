'use strict';

// write your code here
// const table = document.querySelector('table');

// for (let i = 0; i < table.rows.length; i++) {
//   const td = document.createElement('td');
//   const th = document.createElement('th');

//   if (i === 0 || i === table.rows.length - 1) {
//     th.innerText = table.rows[i].cells[1].innerText;
//     table.rows[i].insertBefore(th, table.rows[i].cells[4]);
//   } else {
//     td.innerText = table.rows[i].cells[1].innerText;
//     table.rows[i].insertBefore(td, table.rows[i].cells[4]);
//   }
// }

const table = [...document.querySelectorAll('tr')];

table.forEach(el => {
  const copy = el.children[1].cloneNode(true);

  el.insertBefore(copy, el.children[4]);
});
