function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];

  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let item = nums[i];

    let set = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      if (set.has(-item - nums[j])) {
        let res = [item, nums[j], -item - nums[j]];
        if (res.join(",") !== result[result.length - 1]?.join(",")) {
          result.push(res);
        }
      } else {
        set.add(nums[j]);
      }
    }
  }

  return result;
}
