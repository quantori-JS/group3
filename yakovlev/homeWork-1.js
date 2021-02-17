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