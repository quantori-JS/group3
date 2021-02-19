const palindrom = function (str) {
    let newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(' ');
    let str1 = newStr.join('');
    let str2 = newStr.reverse().join('');

    return str1 === str2;
}
