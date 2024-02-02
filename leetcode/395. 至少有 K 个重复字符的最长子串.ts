function longestSubstring(s: string, k: number): number {
  let result = 0;
  let left = 0;
  let right = 0;
  let map = {};

  while (left < s.length) {
    let char = s[right];
    map[char] = map[char] ? map[char] + 1 : 1;

    if (
      Object.keys(map).every((item) => {
        return map[item] >= k;
      })
    ) {
      result = Math.max(result, right - left + 1);
    }
    right++;

    if (right >= s.length) {
      left++;
      map = {};
      right = left;
    }
    // 优化循环
    if (left > s.length - result) {
      return result;
    }
  }

  return result;
}
