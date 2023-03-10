// 1 Задача
document.body.firstElementChild;
document.body.lastElementChild;
document.body.lastElementChild.lastElementChild;

// 3 Задача
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.background = 'red';
}