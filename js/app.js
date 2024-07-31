//! 1-misol \\\



//! 2-misol \\\

// let arr = ['azizbek', true, 22, 'salom', "ko'rishguncha"]

// function str(arr1) {
//     let res = '';
//     for (const i of arr1) {
//         if (typeof i === 'string') {
//             res = res + i
//         }
//     }
//     return res
// }

// console.log(str(arr));

//! 3-misol \\\

// let arr = ['salom','azizbek', true, 22, "ko'rishguncha"]

// let res = arr.forEach(function(arr){
//     if (typeof arr == 'string') {
//         console.log(arr.toUpperCase());
//     }
// })

//! 4-misol \\\

// function arrayElements(arr) {
//     if (arr.length == 0) return 0;

//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//         res *= arr[i];
//     }
//     return res;
// }

// let arr = [1, 2, 3, 4, 5];
// let res = arrayElements(arr);
// console.log(res);

//! 5-misol \\\

// function filtr(arr) {
//     let res1 = arr.slice();

//     res1.sort((a, b) => a - b);

//     return res1;
// }

// let numbers = [5, 3, 8, 1, 2];
// let res = filtr(numbers);

// console.log(numbers);
// console.log(res);

//! 6-misol \\\

// let arr = [1, 2, 3, 4, 5];

// function numbers(arr) {
//     let res = []
//     for (const i of arr) {
//         res.unshift(i)
//     }
//     return res
// }

// console.log(numbers(arr));

//! 7-misol \\\

// let arr = [1, 2, 3, 4, 5];

// function index(arr) {
//     let res2 = [];

//     for (let i = 0; i < arr.length; i++) {
//         res2.push(i);
//     }

//     return res2;
// }

// let res3 = index(arr);

// console.log(res3);

//! 8-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function elementIndex(arr, a) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i == a) {
//             return arr[i]
//         }
//     }
// }

// let a = prompt('0dan 9gacha son kiriting')

// console.log(elementIndex(arr, a));

//! 9-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a = 2;

// function arrTwo(arr, a) {
//     let res = [];
//     for (const i of arr) {
//         res.push(i * a)
//     }
//     return res
// }
// console.log(arrTwo(arr, a));

//! 10-misol \\\

// let arr = [1, 2, 3, -4, 5, 6, 7, -8, 9, -10]

// function ajratish(arr) {
//     let manfiy = [];
//     for (const i of arr) {
//         if (i < 0) {
//             manfiy.push(i)
//         }
//     }
//     return manfiy
// }
// console.log(ajratish(arr));

//! 11-misol \\\
//! 12-misol \\\

// let arr = [1, 2, 3, true, 5, 6, 7, NaN, 9]

// function toSztring(arr) {
//     let res = []
//     for (const iterator of arr) {
//         res.push(iterator.toString())
//     }
//     return res
// }

// console.log(toSztring(arr));

//! 13-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function juftIndex(arr) {
//     let res  = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// console.log(juftIndex(arr));

//! 14-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function toqNumbers(arr) {
//     let res = 0;
//     for (const iterator of arr) {
//         if (iterator % 2 == 0) {
//             res += 1
//         }
//     }
//     return res
// }

// console.log(toqNumbers(arr));

//! 15-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function maxAndmin(arr) {
//     let max = arr[0]
//     let min = arr[0]
//     let res = [];
//     for (const i of arr) {
//         if (max < i) {
//             max = i
//         }
//         if (min > i) {
//             min = i
//         }
//     }
//     res.push('arraydagi eng katta son',max)
//     res.push('arraydagi eng kichik son',min)
//     return res
// }
// console.log(maxAndmin(arr));

//! 16-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function toElementArr(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i], arr[i]);
//     }

//     return res;
// }

// let res = toElementArr(arr);
// console.log("Asl massiv: ", arr);
// console.log("Takrorlangan massiv: ", res);

//! 17-misol \\\
//! 18-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a = 2;

// function element(arg, a) {
//     let res = [];
//     for (const iterator of arg) {
//         res.push((iterator + a).toString())
//     }
//     return res
// }
// console.log(element(arr, a));

//! 19-misol \\\

// let arr = [1, '2', 3, '4', 5, '6', 7, 8, '9', 10]

// function str(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'string') {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(str(arr));

//! 20-misol \\\

// let arr = [" ", 2, ' ', 4, 5, ' ', 7, ' ', ` `, 10]

// function probelCount(arr) {
//     let count = 0;
//     for (const iterator of arr) {
//         if (iterator == ' ') {
//             count += 1
//         }
//     }
//     return count
// }
// console.log(probelCount(arr));

//! 21-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function teskariArray(arg) {
//     let res = []
//     for (const iterator of arg) {
//         res.unshift(iterator)
//     }
//     return res
// }
// console.log(teskariArray(arr));

//! 22-misol \\\

// let arr = [16, 25, 4, 9, 49]

// function ildiz(arg) {
//     let res = []
//     for (const iterator of arg) {
//         res.push(Math.pow(iterator, 1 / 2))
//     }
//     return res
// }
// console.log(ildiz(arr));

//! 23-misol \\\

// let arr = [1, -2, 3, -4, 5, -6, 7, 8, 9, -10]
// function array(arg) {
//     let manfiy = [];
//     let musbat = [];
//     let res = [];

//     for (const i of arg) {
//         if (i < 0) {
//             manfiy.push(i)
//         } else {
//             musbat.push(i)
//         }
//     }
//     res.push('manfiy sonlar',manfiy)
//     res.push('musbat sonlar',musbat)
//     return res
// }
// console.log(array(arr));

//! 24-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function toqIndeks(arr) {
//     let toq = []
//     let juft = []
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             juft.push(arr[i])
//         } else{
//             toq.push(arr[i])
//         }
//     }
//     res.push('toq sonlar' ,toq)
//     res.push('juft sonlar' ,juft)
//     return res
// }
// console.log(toqIndeks(arr));

//! 25-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// function factorial2(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         res.push(factorial(arr[i]));
//     }

//     return res;
// }

// let factorials = factorial2(arr);

// console.log("Faktorial massiv: ", factorials);
