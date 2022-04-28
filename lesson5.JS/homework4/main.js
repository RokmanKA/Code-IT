// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rec(a,b) {
//     return a * b;
// }
//
// console.log(rec(15, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circ(r) {
//     return 3.14 * r *r;
// }
//
// console.log(circ(20));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function circle(r,h) {
//     return 3.14 * h * r * 4;
// }
//
// console.log(circle(4,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3];
// function data(arry) {
//     for (const item of arry) {
//         console.log(item);
//     }
// }
// data(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function par(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// par('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function box(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//
// </ul>`);
// }
//     box('text');
//     box('lol');
//     box('wow');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function lif(text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// lif('hello', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1,2,'hello', true];
// function data(arr) {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// data(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id : 1,
//         name : 'petya',
//         age : 22
//     },
//     {
//         id : 2,
//         name : 'olya',
//         age : 20
//     },
// ]
//
// function obj(array) {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//     }
// }
// obj(arr);

// - створити функцію яка повертає найменьше число з масиву
//
// let arr = [1,2,4,5,7,-4];
// function minm(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//     }
//     return min;
// }
//
// console.log(minm(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr = [1,2,3];

function foo(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(foo(arr));