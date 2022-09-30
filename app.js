
// Algoritm 1
// let arr = ["kiyik", "aziza"]
// function Palindrom(a) {
//     let c = 0;
//     let d = 0;
//     for (let i = 0, j = a[0].length-1; i < a[0].length; i++, j--) {
//         if (a[0][i] == a[0][j]) {
//             c++;
//             console.log("true");
//         }
//     }
//     for (let i = 0, j = a[1].length-1; i < a[1].length; i++, j--) {
//         if (a[1][i] == a[1][j]) {
//             d++;
//             console.log("true");
//         }
//     }
//     if (c == a[0].length && d == a[1].length) {
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(Palindrom(arr));

// Algoritm 2

// 1-usul
// let arr = [1, 2, 3];
// let b;
// function reverse(a) {
//     b = a.reverse();
//     return b;
// }
// console.log(reverse(arr));

// 2-usul
// let arr = [1, 2, 3];
// let b = [];
// function reverse(a) {
//     for (let i = a.length-1; i >= 0; i--) {
//         b.push(a[i]);
//     } return b;
// }
// console.log(reverse(arr));

// Algoritm 3
// let word = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, nulla! Iste repudiandae molestiae animi, fugit tempora exercitationem voluptates maiores accusamus molestias et odio officiis incidunt adipisci iusto. Officia, enim non.";
// function lorem(a) {
//     let b = word.split(" ").join("");
//     for (let i = 0; i < 10; i++) {
//         console.log(b[i]);
//     }
// }
// console.log(lorem(word));

// Algoritm 4
// let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// function sort(a) {
//     console.log(a.sort());
// }
// console.log(sort(nums));

// Algoritm 5
// let object = {
//     a:1,
//     b:2,
//     c:3,
// }
// function keys(a) {
//     console.log(Object.keys(a).length);
// }
// console.log(keys(object));

// Algoritm 6
// let arr = [4, 6, 8, 14, 16, 20];
// let b = 0;
// function qoldiq(a) {
//     for (let i = 0; i < a.length; i++) {
//         b = b + a[i] % 3;
//     } return b;
// }
// console.log(qoldiq(arr));

// Algoritm 7
// let o = {a:"v"};
// let w = "a";
// function fun(obj, str) {
//     if (Object.keys(obj)==str) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(fun(o, w));

// Algoritm 8 va 9


// Algoritm 10
// let obj = {
//     a: "",
//     j: "1",
//     h: "",
//     y: "4",
// }
// function val(a) {
//     let i = Object.values(a);
//     for (let r = 0; r < i.length; r++) {
//         if (i[r] == "") {
//             i[r] = "true";
//             console.log(i[r]);
//         }
//     }
// }
// console.log(val(obj));