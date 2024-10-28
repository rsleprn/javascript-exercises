const sumAll = function (first, second) {
    if (first < 0 || second < 0) return "ERROR";
    if (typeof first !== 'number' || typeof second !== 'number') return "ERROR";
    if (!Number.isInteger(first) || !Number.isInteger(second)) return 'ERROR';

    let total = 0;
    if (first < second) {
        for (let i = first; i <= second; i++) {
            total += i;
        }
    } else {
        for (let i = second; i <= first; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
