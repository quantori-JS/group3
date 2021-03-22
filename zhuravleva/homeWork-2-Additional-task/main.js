import { book } from "./book.js";
let wordsArray = getArrWords(book);
let arr1 = [];
let arr2 = [];
let arr3 = [];
let num;

start();

function start() {
    addWords();
    while (countWords(arr1) && countWords(arr2) && countWords(arr3)) {
        addWords();
    }
}

function addWords() {
    addWordsArr(arr1);
    addWordsArr(arr2);
    addWordsArr(arr3);
}

function addWordsArr(arr) {
    num = randomInteger(0, wordsArray.length - 1);
    arr.push(wordsArray[num]);
}

function countWords(arr) {
    let count = {};
    arr.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });
    let results = Object.values(count);
    var a = results.filter(item => item > 10);
    if (a.length !== 0) {
        console.log(arr);
        console.log(count);
    }
    return a.length === 0;
};

function getArrWords(arr) {
    return arr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(' ');
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
