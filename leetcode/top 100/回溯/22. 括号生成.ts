function generateParenthesis(n: number): string[] {
  let result: string[] = [];

  function dfs(left: number, right: number, str: string) {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }

    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }

    if (right > left && right > 0) {
      dfs(left, right - 1, str + ")");
    }
  }

  dfs(n, n, "");
  return result;
}
