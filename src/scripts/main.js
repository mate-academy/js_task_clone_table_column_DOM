'use strict';

const allTrs = Array.from(document.querySelectorAll('tr'));

for (const child of allTrs) {
  if (child.querySelector('td')) {
    const allItemsTd = Array.from(child.querySelectorAll('td'));

    for (let i = 0; i < allItemsTd.length; i++) {
      if (i === 1) {
        const newData = document.createElement('td');

        newData.textContent = allItemsTd[i].textContent;
        child.lastElementChild.insertAdjacentElement('beforebegin', newData);
      }
    }
  }

  const allItemsTh = Array.from(child.querySelectorAll('th'));

  for (let i = 0; i < allItemsTh.length; i++) {
    if (i === 1) {
      const newData = document.createElement('th');

      newData.textContent = allItemsTh[i].textContent;
      child.lastElementChild.insertAdjacentElement('beforebegin', newData);
    }
  }
}
