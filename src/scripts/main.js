'use strict';

const rows = Array.from(document.querySelectorAll('tr'));

rows.forEach(row => {
  let data;
  let info = Array.from(row.querySelectorAll('td'))[1];

  if (!info) {
    info = Array.from(row.querySelectorAll('th'))[1];
  }

  if (info.localName === 'th') {
    data = document.createElement('th');
  } else {
    data = document.createElement('td');
  }
  row.insertBefore(data, row.lastElementChild).append(info.innerHTML);
});
