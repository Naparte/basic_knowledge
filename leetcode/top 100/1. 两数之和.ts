function twoSum(nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    let difference = target - item;

    if (map.has(difference)) {
      return [i, map.get(difference)];
    }

    map.set(item, i);
  }
  return [];
}
