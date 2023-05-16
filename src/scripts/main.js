'use strict';

const allTrs = document.querySelectorAll('table tr');

for (const tr of allTrs) {
  const thElements = tr.getElementsByTagName('th');

  if (thElements.length !== 0) {
    const copyiedElement = document.createElement('th');

    copyiedElement.innerText = thElements[1].innerText;
    tr.append(copyiedElement);
  } else {
    const tdElements = tr.getElementsByTagName('td');
    const copyiedElement = document.createElement('td');

    copyiedElement.innerText = tdElements[1].innerText;
    tr.append(copyiedElement);
  }
}
