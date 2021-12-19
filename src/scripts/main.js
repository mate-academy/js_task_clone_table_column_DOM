'use strict';

const titles = document.querySelectorAll('th:nth-child(2)');
const positions = document.querySelectorAll('td:nth-child(2)');

const targetTitles = document.querySelectorAll('th:last-child');
const targetPositions = document.querySelectorAll('td:last-child');

const header = document.querySelector('thead > tr');
const footer = document.querySelector('tfoot > tr');

header.insertBefore(titles[0].cloneNode(true), targetTitles[0]);
footer.insertBefore(titles[1].cloneNode(true), targetTitles[1]);

for (let i = 0; i < [...positions].length; i++) {
  const parent = document.querySelectorAll('tbody > tr')[i];

  parent.insertBefore(positions[i].cloneNode(true), targetPositions[i]);
}
