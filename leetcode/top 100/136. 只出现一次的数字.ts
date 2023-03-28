function singleNumber(nums: number[]): number {
  let map = new Map();

  nums.forEach((val, index) => {
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      map.delete(val);
    }
  });

  return Array.from(map)[0][0];
}
