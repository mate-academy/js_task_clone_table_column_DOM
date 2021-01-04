'use strict';

const tags = ['thead', 'tbody', 'tfoot'];

function copyColumn(array) {
  for (const selector of array) {
    let copy;
    const innerItem = document.querySelectorAll(`${selector} > tr`);

    if (innerItem.length === 1) {
      copy = innerItem[0].children[1];

      innerItem[0].children[3].insertAdjacentHTML('afterend', `
        <th>${copy.innerText}</th>
      `);
    } else {
      for (const person of innerItem) {
        const copyBody = person.children[1];

        person.children[3].insertAdjacentHTML('afterend', `
          <td>${copyBody.innerText}</td>
        `);
      }
    }
  }
}

copyColumn(tags);
