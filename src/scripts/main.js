'use strict';

const copyPosition = 1;
const targetPosition = 3;

const copyHead = document.querySelector('thead')
  .children[0].children[copyPosition];
const targetHead = document.querySelector('thead')
  .children[0].children[targetPosition];
const copyFoot = document.querySelector('tfoot')
  .children[0].children[copyPosition];
const targetFoot = document.querySelector('tfoot')
  .children[0].children[targetPosition];

targetHead.after(copyHead.cloneNode(true));
targetFoot.after(copyFoot.cloneNode(true));

const copyItem = document.querySelector('tbody');
const targetItem = document.querySelector('tbody');

for (let i = 0; i < copyItem.children.length; i++) {
  targetItem.children[i].children[targetPosition]
    .after(copyItem.children[i].children[copyPosition].cloneNode(true));
}
