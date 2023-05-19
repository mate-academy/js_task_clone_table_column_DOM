'use strict';

const data = document.querySelectorAll('tr');

for (const value of data) {
  const check = value.children[0].tagName;
  const useData = value.children[1];
  const tag = check === 'TH' ? 'th' : 'td';
  const newElement = document.createElement(tag);

  newElement.textContent = useData.textContent;
  value.children[4].before(newElement);
}
