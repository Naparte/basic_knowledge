/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    if (!input.includes('.')) {
        return 0;
    }

    let result = [];
    let dirArr = input.split('\n');
    let max = 0;
    for (let i = 0; i < dirArr.length; i++) {
        let dir = dirArr[i];
        let files = dir.split('\t');

        if (files.length - 1 < result.length) { // 判断当前是否为目录下最后一个文件，不是的的换行拉平文件
            while (files.length - 1 < result.length) {
                result.pop();
            }
        }
        let temp = files.pop();
        result.push(temp);
        if (/\w+\.\w+/.test(temp)) { // 判断是否为文件
            max = Math.max(result.join('/').length, max);
        }

    }
    return max;
};