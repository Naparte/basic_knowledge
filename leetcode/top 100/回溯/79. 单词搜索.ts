function exist(board: string[][], word: string): boolean {
  let width = board[0].length;
  let height = board.length;

  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let visited = new Array(height).fill([]).map(() => {
    return new Array(width).fill(false);
  });

  function dfs(w: number, h: number, str: string) {
    if (str.length === word.length) {
      return true;
    }

    return direction.some((item, i) => {
      let w2 = w + item[1];
      let h2 = h + item[0];

      if (
        w2 >= width ||
        h2 >= height ||
        w2 < 0 ||
        h2 < 0 ||
        visited[h2][w2] !== false ||
        board[h2][w2] !== word[str.length]
      ) {
        return false;
      }
      visited[h2][w2] = true;

      let flag = dfs(w2, h2, str + board[h2][w2]);
      visited[h2][w2] = false;

      return flag;
    });
  }

  for (let w = 0; w < width; w++) {
    for (let h = 0; h < height; h++) {
      visited[h][w] = true;
      if (board[h][w] === word[0] && dfs(w, h, word[0])) {
        return true;
      }
      visited[h][w] = false;
    }
  }

  return false;
}
