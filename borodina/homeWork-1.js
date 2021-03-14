//Create function for check if provided is palindrome

function isPalindrome1(phrase) {
    let reversedPhrase = phrase.split('').reverse();
    return phrase.toUpperCase() === reversedPhrase.join('').toUpperCase();
}

function isPalindrome2(phrase) {
    let reversedPhrase = [];
    for (let i = 0; i <= phrase.length; i++) {
        reversedPhrase[i] = phrase[phrase.length - i];
    }
    return phrase.toUpperCase() === reversedPhrase.join('').toUpperCase();
}

console.log(isPalindrome1('text'));
console.log(isPalindrome1('Olo'));

console.log(isPalindrome2('df,mbnfd,vmn.fm'));
console.log(isPalindrome2('prIo OiRp'));