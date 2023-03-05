function findRepeatNumber(nums: number[]): number {
  const map: Map<number, number> = new Map();
  for (let i of nums) {
    if (map.has(i)) return i;
    else map.set(i, 1);
  }
}
