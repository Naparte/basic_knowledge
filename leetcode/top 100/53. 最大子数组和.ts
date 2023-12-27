function maxSubArray(nums: number[]): number {
  let precurrentMax = 0;

  let arr = nums.map((item) => {
    if (item >= item + precurrentMax) {
      precurrentMax = item;
      return item;
    }
    precurrentMax = item + precurrentMax;
    return precurrentMax;
  });

  return Math.max.apply(null, arr);
}
