'use strict';

const innerItem = document.querySelectorAll(`tr`);

innerItem.forEach((element) => {
  const copy = element.children[1];
  const grandpa = copy.parentElement.parentElement.tagName;

  if (grandpa === 'THEAD' || grandpa === 'TFOOT') {
    element.children[3].insertAdjacentHTML('afterend', `
    <th>${copy.innerText}</th>
  `);
  } else {
    element.children[3].insertAdjacentHTML('afterend', `
    <td>${copy.innerText}</td>
  `);
  }
});
