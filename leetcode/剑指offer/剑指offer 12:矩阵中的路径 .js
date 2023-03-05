/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let height = board.length;
  let width = board[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = new Array(height);
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(width).fill(false);
  }

  let check = function (i, j, s, k) {
    if (board[i][j] !== s.charAt(k)) {
      return false;
    }
    if (k === s.length - 1) {
      return true;
    }
    visited[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      let newi = i + dx,
        newj = j + dy;
      if (newi >= 0 && newi < height && newj >= 0 && newj < width) {
        if (!visited[newi][newj]) {
          const flag = check(newi, newj, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let result = check(i, j, word, 0);
      if (result) {
        return true;
      }
    }
  }

  return false;
};
