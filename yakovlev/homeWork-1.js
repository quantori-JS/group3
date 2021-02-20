function isPalindrome(str, caseSensitivity = false) {
    if (!caseSensitivity) {
        str = str.toLowerCase();
    }
    const strReverse = [].map.call(str, function (element) {
        return element
    }).reverse().join('');
    return str === strReverse
}

console.log(isPalindrome('Lol')); // true
console.log(isPalindrome('Lol', true)); //false


// additional
// Quick Sort

function generateArray(length) {
    const randomArray = Array(length).fill(null).map(() => Math.floor(Math.random() * 100));
    console.log(randomArray);
    return randomArray
}

function quickSort(array) {
    if (array.length < 2){
        return array
    }
    const index = Math.floor(Math.random()*array.length);
    const baseItem = array[index];
    const moreBase = [];
    const lessBase = [];

    for (let i = 0; i < array.length; i++ ){
        if (i === index){
            continue;
        }
        if (array[i] > baseItem){
            moreBase.push(array[i])
        } else {
            lessBase.push(array[i])
        }
    }
    return [...quickSort(moreBase), baseItem, ...quickSort(lessBase)]
}

console.log(quickSort(generateArray(100)));