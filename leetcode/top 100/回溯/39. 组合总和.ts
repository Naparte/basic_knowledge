function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  function dfs(count: number, arr: number[], index) {
    if (count > target) {
      return;
    }
    if (count === target) {
      result.push([...arr]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      let item = candidates[i];

      dfs(count + item, arr.concat(item), i);
    }
  }

  dfs(0, [], 0);
  return result;
}
