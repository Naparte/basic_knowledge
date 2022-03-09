/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let map = {
        '+': function(arr) {
            let len = arr.length;
            let temp = +arr[len - 1] + +arr[len - 2];
            arr.push(temp)
            return arr;
        },

        'D': function(arr) {
            let temp = (+arr[arr.length - 1]) * 2;
            arr.push(temp);
            return arr;
        },
        'C': function(arr) {
            return arr.slice(0, -1);
        }
    };

    let fractionArr = ops.reduce((calcuate, val) => {
        let fn = map[val];
        if (fn) {
            calcuate = fn(calcuate);
        } else {
            calcuate.push(val);
        }
        return calcuate;
    }, []);

    return fractionArr.reduce((calcuate, val) => {

        return calcuate + +val;
    }, 0);
};