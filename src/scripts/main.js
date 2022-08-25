'use strict';

// write your code here

const head = document.querySelectorAll('thead > tr > th')[1];
const foot = document.querySelectorAll('tfoot > tr > th')[1];
let dataset = document.querySelectorAll('tbody > tr > td:first-child');

dataset = [...dataset].map(element => element.nextElementSibling);

const copyHead = document.createElement('th');

copyHead.innerText = head.innerText;

head.parentElement.append(copyHead);

head.parentElement
  .append(head.parentElement.lastElementChild.previousElementSibling);

const copyFoot = document.createElement('th');

copyFoot.innerText = foot.innerText;

foot.parentElement.append(copyFoot);

foot.parentElement
  .append(foot.parentElement.lastElementChild.previousElementSibling);

dataset.forEach(element => {
  const copyData = document.createElement('td');

  copyData.innerText = element.innerText;

  element.parentElement.append(copyData);

  element.parentElement
    .append(element.parentElement.lastElementChild.previousElementSibling);
});
