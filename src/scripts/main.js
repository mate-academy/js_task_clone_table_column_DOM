'use strict';

const table = document.querySelector('table');

function copyAndPaste(element) {
  const tr = [...element.querySelectorAll('tr')];

  const secondColumn = tr.map((el) => el.children[1].innerText);

  secondColumn.forEach((el, index, arr) => {
    const item =
      el === 'Position'
        ? document.createElement('th')
        : document.createElement('td');

    item.textContent = el;
    tr[index].insertBefore(item, tr[index].lastElementChild);
  });
}

const tHead = table.querySelector('thead');
const tBody = table.querySelector('tbody');
const tFoot = table.querySelector('tfoot');

copyAndPaste(tHead);
copyAndPaste(tBody);
copyAndPaste(tFoot);
