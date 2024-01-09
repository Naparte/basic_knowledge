function majorityElement(nums: number[]): number {
  let map: { [props: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    let count = map[item] || 0;

    if (count + 1 > nums.length / 2) {
      return item;
    }

    map[item] = count + 1;
  }
}
