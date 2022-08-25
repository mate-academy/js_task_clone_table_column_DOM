'use strict';

// write your code here

const head = document.querySelectorAll('thead > tr > th')[1];
const foot = document.querySelectorAll('tfoot > tr > th')[1];
let dataset = document.querySelectorAll('tbody > tr > td:first-child');

dataset = [...dataset].map(element => element.nextElementSibling);

const copyHead = document.createElement('th');

copyHead.innerText = head.innerText;

head.parentElement.lastElementChild
  .before(copyHead);

const copyFoot = document.createElement('th');

copyFoot.innerText = foot.innerText;

foot.parentElement.lastElementChild
  .before(copyFoot);

dataset.forEach(element => {
  const copyData = document.createElement('td');

  copyData.innerText = element.innerText;

  element.parentElement.lastElementChild
    .before(copyData);
});
