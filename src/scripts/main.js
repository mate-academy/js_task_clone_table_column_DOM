'use strict';

const tableData = document.querySelector('table').children;

for (const data of tableData) {
  const secondCollum = [];
  const lastCollum = [];
  const tagName = data.children[0].children[0].localName;

  [...data.children].forEach(el => {
    secondCollum.push(el.children[1].innerText);
    lastCollum.push(el.children[4].innerText);
  });

  for (let i = 0; i < secondCollum.length; i++) {
    const newElement = document.createElement(`${tagName}`);

    newElement.innerText = lastCollum[i];

    data.children[i].children[4].innerText = secondCollum[i];

    data.children[i].append(newElement);
  }
}
