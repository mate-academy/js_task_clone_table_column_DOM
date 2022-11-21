'use strict';

const namePosition = document.querySelectorAll('thead tr th')[1];
const newNamePosition = namePosition.cloneNode(true);

const namePositionFoot = document.querySelectorAll('tfoot tr th')[1];
const newNamePositionFoot = namePositionFoot.cloneNode(true);

const theadTr = document.querySelector('table thead tr');
const tfootTr = document.querySelector('table tfoot tr');

theadTr.insertBefore(newNamePosition, theadTr.children[4]);
tfootTr.insertBefore(newNamePositionFoot, tfootTr.children[4]);

const tbodyTr = document.querySelectorAll('table tbody tr');

tbodyTr.forEach(tr => {
  const position = tr.children[1].outerHTML;

  tr.children[3].insertAdjacentHTML('afterend', position);
});
