'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(e => {
  const tdElements = e.querySelectorAll('td');

  if (tdElements.length > 0) {
    cloneFirstAndInsertBefore(tdElements);
  } else {
    cloneFirstAndInsertBefore(e.querySelectorAll('th'));
  }
});

function cloneFirstAndInsertBefore(nodeList) {
  const thClone = nodeList[1].cloneNode(true);
  const lastChild = nodeList[nodeList.length - 1];

  nodeList[1].parentNode.insertBefore(thClone, lastChild);
}
