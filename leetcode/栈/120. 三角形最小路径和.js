/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length >= 2) {
        for (let i = triangle.length - 2; i >= 0; i--) {
            let arr = triangle[i];
            for (let j = 0; j < arr.length; j++) {
                let num = triangle[i][j];
                triangle[i][j] = Math.min(num + triangle[i + 1][j], num + triangle[i + 1][j + 1]);
            }
        }
    }

    return triangle[0][0];
};