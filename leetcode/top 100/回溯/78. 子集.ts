function subsets(nums: number[]): number[][] {
  let result: number[][] = [];

  let set: Set<number> = new Set();
  function dfs(n: number, index: number = 0) {
    if (n === 0) {
      result.push(Array.from(set));
    } else {
      for (let i = index; i < nums.length; i++) {
        if (!set.has(nums[i])) {
          set.add(nums[i]);
          dfs(n - 1, i);
          set.delete(nums[i]);
        }
      }
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    dfs(i);
  }

  return result;
}
