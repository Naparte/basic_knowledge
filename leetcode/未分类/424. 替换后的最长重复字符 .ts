function characterReplacement(s: string, k: number): number {
  if (k >= s.length - 1) return s.length;
  // 建一个长度为26的数组用于存储每个字符的个数
  const arr = new Array(26).fill(0);
  // A 对应的 ASCII
  const a = "A".charCodeAt(0);
  let left = 0,
    right = 0,
    result = 0,
    maxCount = 0;
  while (right < s.length) {
    maxCount = Math.max(maxCount, ++arr[s.charCodeAt(right++) - a]);
    if (right - left > maxCount + k) {
      --arr[s.charCodeAt(left++) - a];
    }
    result = Math.max(result, right - left);
  }
  return result;
}
