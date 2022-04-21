// let x = +prompt('give me x');
// if (x === 0) {
//     console.log('virno');
// } else {
//     console.log('ne virno')
// }

/////////////////////////////////////////////////////
//
// let time = +prompt('wht time is it?');
// if (time >= 0 && time <= 15) {
//     console.log('first quater');
// } else if (time > 15 && time <= 30) {
//     console.log('second quater');
// } else if (time > 30 && time <= 45) {
//     console.log('third quater');
// } else if (time > 45 && time <= 60) {
//     console.log('fourth quater');
// } else {
//     console.log('????????');
// }

//////////////////////////////////////////////////////


// let day = +prompt('day number');
// if (typeof day === 'number') {
//
//     if (day >= 1 && day <= 11) {
//         console.log('decade 1');
//     } else if (day > 11 && day <= 20) {
//         console.log('decade 2');
//     } else if (day > 20 && day <= 31) {
//         console.log('decade 3');
//     } else {
//         console.log('?????????');
//     }
// } else {
//     console.log('you enter string type');
// }

///////////////////////////////////////////////////////////

// switch (+prompt('enter day number')) {
//     case 1:
//         console.log('робота, пара ІТ');
//         break;
//     case 2:
//         console.log('робота, треня');
//         break;
//     case 3:
//         console.log('робота, пара ІТ');
//         break;
//     case 4:
//         console.log('робота, треня');
//         break;
//     case 5:
//         console.log('робота, пара ІТ');
//         break;
//     case 6:
//         console.log('робота, треня');
//         break;
//     case 7:
//         console.log('відпочинок');
//         break;
//     default :
// }

//////////////////////////////////////////////////////////


// let a = 0;
// let  b = 1;
//
// if (a > b) {
// } else if (b > a) {
//     console.log('bob');
// }else if (a === b) {
//     console.log('equal');
// }

//////////////////////////////////////

let a = 0;
let b = 0;
let c = 0;

if (a > b && a > c ) {
    console.log(a);
}else if (b > c && b > a) {
    console.log(b);
}else if (c > a  && c> b) {
    console.log(c);
}else if (a === b && b === c) {
    console.log('equal');
}else {
    console.log('?????');
}

