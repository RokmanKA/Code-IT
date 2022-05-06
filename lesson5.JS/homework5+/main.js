//
// Всі функції повинні бути описані стрілочним типом!!!!



// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    let min = (...arg) => {
    let min = arg[0];
    for (const argElement of arg) {
        if (argElement < min) {
            min = argElement
        }
    }
    return min;
}
console.log(min(4, -5, 9));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let Max = (...arg) => {
    let max = arg[0];
    for (const argElement of arg) {

        if (argElement > max) {
            max = argElement
        }
    }
    console.log(max);
}
console.log(Max(3, 6, 14));

// - створити функцію яка повертає найбільше число з масиву

let maxx = [5,6,2,1,13,22];
function maxm(array) {
    let max = array[0];
    for (const item of array) {
        if (item > max) {
            max = item
        }
    }
    return max;
}

console.log(maxm(maxx));


// - створити функцію яка повертає найменьше число з масиву

let arr = [1,2,4,5,7,-4];
function minm(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item
        }
    }
    return min;
}

console.log(minm(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


let arrs = [5,3,8];

function foo(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(foo(arrs));


// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// - функція Приймає масив та число "i", та міняє місцями об'єкт який знаходиться в індексі "i" на "i+1"
// ПРИКЛАД:
//     foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// ПРИКЛАД:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0] => [1,0,0,0,0]