module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    let result = [];

    for (let brackets of bracketsConfig) {
        map.set(brackets[0], brackets[1]);
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === result[result.length - 1]) {
            result.pop();
        } else {
            result.push(map.get(str[i]));
        }
    }

    return result.length === 0;
}
