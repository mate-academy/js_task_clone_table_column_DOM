'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const [personName, position, place, age, sallary]
    = [...tr[i].children].map(a => a.textContent);

  const format = i === 0 || i === tr.length - 1 ? 'th' : 'td';

  const html = `<tr>
<${format}>${personName}</${format}>
<${format}>${position}</${format}>
<${format}>${place}</${format}>
<${format}>${age}</${format}>
<${format}>${position}</${format}>
<${format}>${sallary}</${format}>
</tr>`;

  tr[i].innerHTML = html;
}
