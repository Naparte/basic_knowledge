function maxSlidingWindow(nums: number[], k: number): number[] {
  let res: number[] = [];
  let tempArr: number[] = [];
  let j = 0;
  let len = nums.length;
  if (len <= k) {
    return [Math.max(...nums)];
  }

  while (j < len) {
    const item = nums[j];
    tempArr.push(item);

    if (tempArr.length === k) {
      res.push(Math.max(...tempArr));
      tempArr.shift();
      j++;
    } else if (tempArr.length < k) {
      j++;
    }
  }

  return res;
}
