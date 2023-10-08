function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    //   排序之后第一个 数字大于零可以跳过
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }

    // for (let j = i + 1; j < nums.length; j++) {
    //   //   排序之后第二个 数字大于零可以跳过
    //   if ((j > i + 1 && nums[j] === nums[j - 1]) || nums[i] + nums[j] > 0) {
    //     continue;
    //   }

    //   let right = nums.length - 1;
    //   while (j < right) {
    //     if (nums[right] === nums[right + 1]) {
    //       right--;
    //       continue;
    //     }
    //     if (nums[i] + nums[j] + nums[right] === 0) {
    //       result.push([nums[i], nums[j], nums[right]]);
    //     }
    //     right--;
    //   }
    // }
  }

  return result;
}
