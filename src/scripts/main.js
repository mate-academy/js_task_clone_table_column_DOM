'use strict';

// write your code here
const tableBody = document.querySelector('tbody');
const theadAgeTitle
  = document.querySelector('thead > tr > th:nth-child(4)');
const tfootAgeTitle
  = document.querySelector('tfoot > tr > th:nth-child(4)');

theadAgeTitle.insertAdjacentHTML('afterend', `
<th>Position</th>
`);

tfootAgeTitle.insertAdjacentHTML('afterend', `
<th>Position</th>
`);

const rows = [...tableBody.querySelectorAll('tr')];

rows.forEach((element) => {
  const position = element.querySelector('td:nth-child(2)');
  const age = element.querySelector('td:nth-child(4)');

  age.insertAdjacentHTML('afterend', `
    <td>${position.textContent}</td>
  `);
});
