'use strict';

function removerPaster(elem) {
  const lastElem = elem?.cells[elem?.cells.length - 1];
  const clone = elem?.cells[1].cloneNode(true);

  elem.append(clone, lastElem);
}

removerPaster(document.querySelector('thead').rows[0]);

document.querySelectorAll('tbody > tr').forEach((trEl) => {
  removerPaster(trEl);
});
removerPaster(document.querySelector('tfoot').rows[0]);
