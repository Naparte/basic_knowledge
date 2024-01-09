function topKFrequent(nums: number[], k: number): number[] {
  let map: { [prop: string]: number } = {};

  nums.forEach((item) => {
    map[item] = (map[item] || 0) + 1;
  });

  let result = Object.entries(map).sort((a, b) => {
    return b[1] - a[1];
  });

  return result.slice(0, k).map((item) => {
    return +item[0];
  });
}
