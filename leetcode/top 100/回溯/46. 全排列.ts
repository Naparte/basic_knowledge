function permute(nums: number[]): number[][] {
  let result: number[][] = [];
  let set = new Set();

  let len = nums.length;
  function dfs(path) {
    if (path.length === len) {
      result.push(path);

      return;
    }

    for (let i = 0; i < len; i++) {
      let item = nums[i];

      if (!set.has(item)) {
        set.add(item);
        dfs([...path, item]);
        set.delete(item);
      }
    }
  }

  dfs([]);
  return result;
}
