/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] && !result.length) {
                result.push(new Map([
                    [i + '-' + j, true]
                ]))
            }

        }
    }

};