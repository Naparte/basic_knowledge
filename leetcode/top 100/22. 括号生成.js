/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  const dfs = function (left, right, str) {
    if (str.length === 2 * n) {
      result.push(str);
    }
    left > 0 && dfs(left - 1, right, str + "(");

    if (left < right) {
      dfs(left, right - 1, str + ")");
    }
  };

  dfs(n, n, "");

  return result;
};
