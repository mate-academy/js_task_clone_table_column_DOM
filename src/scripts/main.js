'use strict';

// write your code here
const thsOftrs = document.querySelectorAll('tr:has(th)');
const arrayOfThsOfTrs = [...thsOftrs];

for (const item of arrayOfThsOfTrs) {
  item.lastElementChild.before(
    item.firstElementChild.nextElementSibling.cloneNode(true));
}

const newPrevLastTds = document.querySelectorAll('tr:has(td)');

const arrayOfnewPrevLastTds = [...newPrevLastTds];

for (let i = 0; i < arrayOfnewPrevLastTds.length; i++) {
  arrayOfnewPrevLastTds[i].lastElementChild.before(
    arrayOfnewPrevLastTds[i].firstElementChild.nextElementSibling.cloneNode(
      true,
    ),
  );
}
