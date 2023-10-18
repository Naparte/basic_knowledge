function findAnagrams(s: string, p: string): number[] {
  let result: number[] = [];

  if (s.length < p.length) {
    return [];
  }

  let sArr = new Array(26).fill(0);
  let pArr = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    ++sArr[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    ++pArr[p[i].charCodeAt(0) - "a".charCodeAt(0)];
  }

  if (sArr.toString() === pArr.toString()) {
    result.push(0);
  }

  for (let i = 0; i < s.length - p.length; i++) {
    --sArr[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    ++sArr[s[i + p.length].charCodeAt(0) - "a".charCodeAt(0)];
    if (sArr.toString() === pArr.toString()) {
      result.push(i + 1);
    }
  }

  return result;
}
