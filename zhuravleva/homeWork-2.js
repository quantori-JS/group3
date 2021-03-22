let arr1 = [];
let arr2 = [];
let randomNum;
let result1 = 0;
let result2 = 0;

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function race() {
    randomNum = randomInteger(2, 10);
    arr1.push(randomNum);
    result1 = arr1.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    if (result1 > 99 && result1 < 104) {
        console.log('Победил первый игрок');
        return;
    }

    randomNum = randomInteger(2, 10);
    arr2.push(randomNum);
    result2 = arr2.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    if (result2 > 99 && result2 < 104) {
        console.log('Победил второй игрок');
        return;
    }

    if (result1 > 104) {
        arr1 = [];
        arr2 = [];
    }

    if (result2 > 104) {
        arr1 = [];
        arr2 = [];
    }

    if (result2 <= 104 || result1 <= 104) {
        race();
    }
}

race();
