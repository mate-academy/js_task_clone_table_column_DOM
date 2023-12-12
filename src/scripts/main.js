'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const listTbody = tbody.querySelectorAll('tr');
const listThead = thead.querySelectorAll('tr');
const listTfoot = tfoot.querySelectorAll('tr');

function makeCopy(listElem, tag) {
  listElem.forEach(elem => {
    const tdList = elem.querySelectorAll(tag);

    const nodeToCopy = tdList[1];
    const copy = nodeToCopy.cloneNode(true);

    tdList[4].before(copy);
  });
}

makeCopy(listTbody, 'td');
makeCopy(listThead, 'th');
makeCopy(listTfoot, 'th');
