/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
    let result = [n];
    let index = 0;

    while (--n) {
        let cur = index % 4
        if (cur === 0) {
            result.push(result.pop() * n);
        } else if (cur === 1) {
            let num = result.pop();
            result.push(num > 0 ? Math.floor(num / n) : Math.ceil(num / n));
        } else if (cur === 2) {
            result.push(n)
        } else if (cur === 3) {
            result.push(-n)
        }

        index++;
    }
    return result.reduce((calculate, val) => {
        return calculate + val;
    }, 0)
};