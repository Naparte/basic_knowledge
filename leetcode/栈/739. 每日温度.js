/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);

    let stack = [];
    temperatures.forEach((val, index) => {
        let top = temperatures[stack[stack.length - 1]];

        if (val <= top || !stack.length) {
            stack.push(index);
        } else {
            while (top < val) {
                let i = stack.pop();
                result[i] = index - i;
                top = temperatures[stack[stack.length - 1]];
            }
            stack.push(index);
        }

    });


    return result;
};