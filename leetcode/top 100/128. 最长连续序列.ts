var longestConsecutive = function (nums: number[]): number {
  let numSet: Set<number> = new Set();

  for (const num of nums) {
    numSet.add(num);
  }

  let result = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentCount = 1;
      let currentnum = num;
      while (numSet.has(currentnum + 1)) {
        currentCount++;
        currentnum++;
      }

      result = Math.max(result, currentCount);
    }
  }

  return result;
};
