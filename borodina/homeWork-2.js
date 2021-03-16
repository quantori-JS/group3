//race emulator

function raceEmulator() {
    let array1 = [];
    let array2 = [];
    let i = 0;
    do {
        array1[i] = getRandomIntInRange(2, 10);
        array2[i] = getRandomIntInRange(2, 10);
        i++;
        if (sumArrayElements(array1) > 104 || sumArrayElements(array2) > 104)
        {
            i = 0;
            array1 = [];
            array2 = [];
        }
    } while (sumArrayElements(array1) < 100 && sumArrayElements(array2) < 100);


    console.log(sumArrayElements(array1) + ' ' + array1);
    console.log(sumArrayElements(array2) + ' ' + array2);
}

function getRandomIntInRange(from, to) {

    return Math.floor(Math.random() * (to - from + 1) + from);
}

function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

raceEmulator()