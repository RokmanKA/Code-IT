// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
//
// let elementById = document.getElementById('content');
// const text = elementById.innerText;
// console.log(text);

// -- отримує текст з блоку з id "rules"
//
// console.log(document.getElementById('rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
//
// let elementById = document.getElementById('content');
// elementById.innerText = 'Hello';
// elementById.innerHTML = 'Hello';
// elementById.textContent = 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let elementByid = document.getElementById(`rules`);
// elementByid.innerText = 'Hello';

// -- змініть кожному елементу колір фону на червоний
//
// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'gold';
// }

// -- змініть кожному елементу колір тексту на синій
//
// let elementNodeListOf = document.querySelectorAll('*');
// for (const elementNodeListOfElement of elementNodeListOf) {
//     elementNodeListOfElement.style.color = 'red';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let elementsByClassName = document.getElementsByClassName('fc_rules');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.color = 'red';
// }

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

document.getElementById('main')

// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)