module.exports = function reverse(n) {
    n = Math.abs(n);
    var str = String(n);
    arr = str.split('').reverse(),
        newStr = '';


    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i];
    }
    n = parseInt(newStr)
    return n;
}
