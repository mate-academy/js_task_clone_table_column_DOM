'use strict';

const trs = document.querySelectorAll('tr');

trs.forEach(tr => {
  const item = tr.parentElement.tagName === 'THEAD'
  || tr.parentElement.tagName === 'TFOOT'
    ? document.createElement('th') : document.createElement('td');

  item.textContent = tr.children[1].textContent;
  tr.insertBefore(item, tr.children[4]);
});
