'use strict';

const headElements = [...document.querySelectorAll('table thead th')];
const bodyElements = [...document.querySelectorAll('table tbody td')];
const footerElements = [...document.querySelectorAll('table tfoot th')];

headElements[headElements.length - 1].insertAdjacentElement(
  'beforebegin', headElements[1].cloneNode(true));

for (let j = 4; j < bodyElements.length; j += 5) {
  bodyElements[j].insertAdjacentElement(
    'beforebegin', bodyElements[j - 3].cloneNode(true));
}

footerElements[footerElements.length - 1].insertAdjacentElement(
  'beforebegin', footerElements[1].cloneNode(true));
