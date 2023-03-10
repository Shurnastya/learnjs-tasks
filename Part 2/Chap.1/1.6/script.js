// 1 Задача
let elem = document.querySelector('[data-widget-name]');
console.log(elem.getAttribute('data-widget-name'));

// 2 Задача
let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');

  if (!href.includes('://')) continue;

  if (href.startsWith('http://internal.com')) continue;

  link.style.color = 'orange';
}