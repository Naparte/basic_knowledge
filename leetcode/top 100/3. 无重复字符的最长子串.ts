function lengthOfLongestSubstring(s: string): number {
  let right = -1;
  let result = 0;
  let occ = new Set();

  for (let i = 0; i < s.length; i++) {
    if (i) {
      occ.delete(s.charAt(i - 1));
    }
    while (right + 1 < s.length && !occ.has(s.charAt(right + 1))) {
      occ.add(s.charAt(right + 1));
      right++;
    }
    console.log(Array.from(occ), right);

    result = Math.max(result, right - i + 1);
  }
  return result;
}
