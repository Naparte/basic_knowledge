function solveNQueens(n: number): string[][] {
  let result = [];

  let board = new Array(n).fill(0);

  function dfs(level) {
    if (level === n) {
      result.push();
    }
  }

  return result;
}

function solveNQueens2(n: number): string[][] {
  const ans = [];
  const col = new Array(n).fill(0);
  const onPath = new Array(n).fill(false);
  const diag1 = new Array(n * 2 - 1).fill(false);
  const diag2 = new Array(n * 2 - 1).fill(false);
  function dfs(r) {
    if (r === n) {
      ans.push(col.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c)));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (!onPath[c] && !diag1[r + c] && !diag2[r - c]) {
        col[r] = c;
        onPath[c] = diag1[r + c] = diag2[r - c] = true;
        dfs(r + 1);
        onPath[c] = diag1[r + c] = diag2[r - c] = false; // 恢复现场
      }
    }
  }
  dfs(0);
  return ans;
}
