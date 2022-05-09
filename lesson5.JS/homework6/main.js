// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world', 'lorem ipsum', 'javascript is cool');

// let lol = 'hello world';
// let lol1 = 'lorem ipsum';
// let lol2 = 'javascript is cool';
// console.log(lol.length);
// console.log(lol1.length);
// console.log(lol2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());


// let lol = 'hello world';
// let lol1 = 'lorem ipsum';
// let lol2 = 'javascript is cool';
// console.log(lol.toUpperCase());
// console.log(lol1.toUpperCase());
// console.log(lol2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// let lol = 'HELLO WORLD';
// let lol1 = 'LOREM IPSUM';
// let lol2 = 'JAVASCRIPT IS COOL';
// console.log(lol.toLowerCase());
// console.log(lol1.toLowerCase());
// console.log(lol2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let repLaceAll = str.replaceAll(' ', '');
// console.log(repLaceAll);
// console.log(str.substring(1,13));
//
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ')
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10,8,-7,55,987,-1011,0,1050,0];
// // console.log(array.map(value => value.toString()));
// console.log(array.map(value => value + ''));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// let sortNums = (arr,direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     }
//     else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
// }
// console.log(sortNums(nums, 'descending'));
// console.log(sortNums(nums, 'ascending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {
//     title: 'Java Complex', monthDuration: 6
// }, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {
//     title: 'FullStack', monthDuration: 7
// }, {title: 'Frontend', monthDuration: 4}];
//
// let sortArray = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArray(coursesAndDurationArray));
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filterArray = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filterArray(coursesAndDurationArray));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


let deckOFCards = [{cardSuit: 'heart', value: '6', color: 'red'}, {cardSuit: 'heart', value: '7', color: 'red'}, {
    cardSuit: 'heart', value: '8', color: 'red'
}, {cardSuit: 'heart', value: '9', color: 'red'}, {cardSuit: 'heart', value: '10', color: 'red'}, {
    cardSuit: 'heart', value: 'jack', color: 'red'
}, {cardSuit: 'heart', value: 'queen', color: 'red'}, {
    cardSuit: 'heart', value: 'king', color: 'red'
}, {cardSuit: 'heart', value: 'ace', color: 'red'}, {
    cardSuit: 'diamond', value: '6', color: 'red'
}, {cardSuit: 'diamond', value: '7', color: 'red'}, {
    cardSuit: 'diamond', value: '8', color: 'red'
}, {cardSuit: 'diamond', value: '9', color: 'red'}, {
    cardSuit: 'diamond', value: '10', color: 'red'
}, {cardSuit: 'diamond', value: 'jack', color: 'red'}, {
    cardSuit: 'diamond', value: 'queen', color: 'red'
}, {cardSuit: 'diamond', value: 'king', color: 'red'}, {
    cardSuit: 'diamond', value: 'ace', color: 'red'
}, {cardSuit: 'spade', value: '6', color: 'black'}, {cardSuit: 'spade', value: '7', color: 'black'}, {
    cardSuit: 'spade', value: '8', color: 'black'
}, {cardSuit: 'spade', value: '9', color: 'black'}, {
    cardSuit: 'spade', value: '10', color: 'black'
}, {cardSuit: 'spade', value: 'jack', color: 'black'}, {
    cardSuit: 'spade', value: 'queen', color: 'black'
}, {cardSuit: 'spade', value: 'king', color: 'black'}, {
    cardSuit: 'spade', value: 'ace', color: 'black'
}, {cardSuit: 'clubs', value: '6', color: 'black'}, {cardSuit: 'clubs', value: '7', color: 'black'}, {
    cardSuit: 'clubs', value: '8', color: 'black'
}, {cardSuit: 'clubs', value: '9', color: 'black'}, {
    cardSuit: 'clubs', value: '10', color: 'black'
}, {cardSuit: 'clubs', value: 'jack', color: 'black'}, {
    cardSuit: 'clubs', value: 'queen', color: 'black'
}, {cardSuit: 'clubs', value: 'king', color: 'black'}, {
    cardSuit: 'clubs', value: 'ace', color: 'black'
}, {value: 'joker'}, {value: 'joker'}]

// описати колоду карт

// console.log(deckOFCards.filter(value => value.value === 'joker'));

// - знайти піковий туз

// console.log(deckOFCards.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));
// console.log(deckOFCards.filter(value => value.cardSuit === 'clubs' && value.value === 'ace'));

// - всі шістки

// console.log(deckOFCards.filter(value => value.value === '6'));

// - всі червоні карти

// console.log(deckOFCards.filter(value => value.color === 'red'));

// - всі буби

// console.log(deckOFCards.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше

// console.log(deckOFCards.filter(value => value.cardSuit === 'clubs' && value.value > '8' || value.value === '10' && value.cardSuit === 'clubs' || value.value === 'joker'));
