'use strict';

const allTrs = document.querySelectorAll('tr');

for (const tr of allTrs) {
  const thElements = tr.getElementsByTagName('th');

  if (thElements.length !== 0) {
    const copyiedElement = document.createElement('th');

    copyiedElement.innerText = thElements[1].innerText;
    tr.insertBefore(copyiedElement, tr.lastElementChild);
  } else {
    const tdElements = tr.getElementsByTagName('td');
    const copiedElement = document.createElement('td');

    copiedElement.innerText = tdElements[1].innerText;
    tr.insertBefore(copiedElement, tr.lastElementChild);
  }
}
