// 1 Задача
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2 Задача
let scrollWidth = div.offsetWidth - div.clientWidth;

// 3 Задача
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';