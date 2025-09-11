'use strict';

// write your code here
document.querySelectorAll('table tr').forEach(function (item) {
  if (item.querySelectorAll('th').length > 0) {
    const lastSel = item.querySelector('th:nth-child(2)').cloneNode(true);

    item.insertBefore(lastSel, item.querySelector('th:last-child'));
  } else if (item.querySelectorAll('td').length > 0) {
    const lastSel = item.querySelector('td:nth-child(2)').cloneNode(true);

    item.insertBefore(lastSel, item.querySelector('td:last-child'));
  }
});
