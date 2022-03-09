/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result = [];

    let i = 0;
    let opr = '';
    while (i < s.length) {
        let char = s[i];

        function getNum(index) {
            let num = '';
            let cnt = 0;
            while (!isNaN(+s[index])) {
                num += s[index];
                index++;
                cnt++;
            }
            return [+num, cnt]
        }

        if (char === '*') {
            let lastNum = result.pop();
            let nums = getNum(++i);
            i += nums[1];
            result.push(lastNum * nums[0]);
        } else if (char === '/') {
            let lastNum = result.pop();
            let nums = getNum(++i);
            i += nums[1];
            result.push(Math.trunc(lastNum / nums[0]));
        } else if (char === '-') {
            let nums = getNum(++i);
            i += nums[1];
            result.push(-nums[0]);
        } else if (!isNaN(+char)) {
            let nums = getNum(i);
            i += nums[1];
            result.push(nums[0]);
        } else {
            i++;
        }


    }

    return result.reduce((cal, val) => {
        return cal + val;
    }, 0)

};