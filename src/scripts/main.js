'use strict';

const collectionOfTr = document.querySelectorAll('tr');

collectionOfTr.forEach((elem) => {
  const tagNameToCreate = elem.firstElementChild.tagName;

  const td = document.createElement(tagNameToCreate);

  td.textContent = elem.firstElementChild.nextElementSibling.textContent;
  elem.insertBefore(td, elem.lastElementChild);
});
