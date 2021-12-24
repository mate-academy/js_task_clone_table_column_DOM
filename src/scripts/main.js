'use strict';

const collum = document.querySelector('tbody').children;
const tHead = document.querySelector('thead').children[0];
const tFoot = document.querySelector('tfoot').children[0];

tHead.children[3].insertAdjacentHTML('afterend', `
<th>${tHead.children[1].textContent}</th>
`);

tFoot.children[3].insertAdjacentHTML('afterend', `
<th>${tFoot.children[1].textContent}</th>
`);

const newCollum = [...collum].map(element => element.children[1].textContent);

for (const tr of collum) {
  const x = tr.children[3];
  const newWord = newCollum.shift();

  x.insertAdjacentHTML('afterend', `
     <td>${newWord}</td>
   `);
}
