function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];

    if (i > k) {
      set.delete(nums[i - k - 1]);
    }

    if (set.has(item)) {
      return true;
    }

    set.add(item);
  }

  return false;
}
