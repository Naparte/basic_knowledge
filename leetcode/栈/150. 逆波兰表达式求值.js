/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let result = [];
    let map = {
        '+': function(arr) {
            return +arr.pop() + +arr.pop();
        },

        '-': function(arr) {
            let num1 = +arr.pop();
            let num2 = +arr.pop();
            return num2 - num1;
        },

        '*': function(arr) {
            let num1 = +arr.pop();
            let num2 = +arr.pop();
            return num2 * num1;
        },
        '/': function(arr) {
            let num1 = +arr.pop();
            let num2 = +arr.pop();
            let result = num2 / num1;
            return result > 0 ? Math.floor(result) : Math.ceil(result);
        }
    };

    tokens.forEach((s) => {
        let fn = map[s];
        if (fn) {
            result.push(fn(result));
        } else {
            result.push(s);
        }
    });

    return result.pop();
};