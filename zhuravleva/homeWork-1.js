// Task 1. Palindrome
const palindrome = function (str) {
    let newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(' ');
    let str1 = newStr.join('');
    let str2 = newStr.reverse().join('');

    return str1 === str2;
}

function swap(items, firstInd, secondInd) {
    const temp = items[firstInd];
    items[firstInd] = items[secondInd];
    items[secondInd] = temp;

}

// Task 2. Quick Sort
function partition(items, l, r) {
    const pivot = items[Math.floor((l + r) / 2)];
    while (l <= r) {
        while (items[l] < pivot) {
            l++;
        };
        while (items[r] > pivot) {
            r--;
        }
        if (l <= r) {
            swap(items, l, r);
            l++;
            r--;
        }
    }
    return l;
}

function quickSort(items, l, r) {
    let index;
    debugger
    if (items.length > 1) {
        index = partition(items, l, r);
        
        if (l < index - 1) {
            quickSort(items, l, index - 1);
        }
        if (index < r) {
            quickSort(items, index, r);
        }
    }
    return items;
}

// console.log(quickSort([4, 3, 2, 1, 5, 9, 6, 7], 0, 7));

