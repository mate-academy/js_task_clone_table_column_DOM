'use strict';

function createColumn(column, position) {
  const table = document.querySelector('table');

  [...table.children].map(grandfatherElement => {
    [...grandfatherElement.children].map(fatherElement => {
      let newChildElement;

      grandfatherElement === table.querySelector('tbody')
        ? newChildElement = document.createElement('td')
        : newChildElement = document.createElement('th');

      newChildElement.textContent = fatherElement.children[column].textContent;
      fatherElement.insertBefore(
        newChildElement,fatherElement.children[position]
      );
    });
  });
}

createColumn(1, 4);
