'use strict';

const allTd = [...document.querySelectorAll('td')];

for (let i = 0; i < allTd.length; i += 5) {
  const copy = allTd[i + 1].cloneNode(true);

  allTd[i + 4].insertAdjacentHTML('beforebegin', `
    <td>${copy.textContent}</td>
  `);
}

const allTh = [...document.querySelectorAll('th')];

for (let i = 0; i < allTh.length; i += 5) {
  const copy = allTh[i + 1].cloneNode(true);

  allTh[i + 4].insertAdjacentHTML('beforebegin', `
    <th>${copy.textContent}</th>
  `);
}
