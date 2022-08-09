'use strict';

const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const columnOfTitles = thead.querySelectorAll('th');

thead.firstElementChild.lastElementChild.insertAdjacentHTML('beforebegin', `
  <th>${columnOfTitles[1].innerHTML}</th>
`);

tfoot.firstElementChild.lastElementChild.insertAdjacentHTML('beforebegin', `
  <th>${columnOfTitles[1].innerHTML}</th>
`);

[...rows].map(row => {
  row.lastElementChild.insertAdjacentHTML('beforebegin', `
    <td>${row.firstElementChild.nextElementSibling.innerHTML}</td>
  `);
});
