function intersect(nums1: number[], nums2: number[]): number[] {
  let map: Map<number, number> = new Map();
  let result: number[] = [];

  nums1.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  nums2.forEach((item) => {
    if (map.has(item) && map.get(item)) {
      result.push(item);
      map.set(item, (map.get(item) as number) - 1);
    }
  });

  return result;
}
