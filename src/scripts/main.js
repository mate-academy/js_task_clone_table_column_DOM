'use strict';

// write your code here

function copyColumn(copyIndex, pasteIndex = 0) {
  const headerEl = [...document.querySelector('thead>tr').children];
  const footerEl = [...document.querySelector('tfoot>tr').children];
  const bodyEl = [...document.querySelectorAll('tbody>tr')];

  const headAndFootText = headerEl[copyIndex].innerText;

  headerEl[pasteIndex].insertAdjacentHTML('beforebegin',
    `<th>${headAndFootText}</th>`);

  footerEl[pasteIndex].insertAdjacentHTML('beforebegin',
    `<th>${headAndFootText}</th>`);

  bodyEl.forEach(el => {
    const textToCopy = [...el.children][copyIndex].innerText;

    [...el.children][pasteIndex].insertAdjacentHTML('beforebegin',
      `<td>${textToCopy}</td>`);
  });
}

copyColumn(1, 4);
