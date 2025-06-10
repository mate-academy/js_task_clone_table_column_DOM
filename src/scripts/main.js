'use strict';

const trArray = document.querySelectorAll('tr');

function insert(array) {
  array.forEach((element) => {
    const child = element.children;

    Array.from(child).forEach((chi, index) => {
      if (index === 1) {
        const newData = document.createElement(chi.tagName.toLowerCase());

        newData.textContent = chi.textContent;
        chi.parentNode.insertBefore(newData, chi.parentNode.lastElementChild);
      }
    });
  });
}

insert(trArray);
