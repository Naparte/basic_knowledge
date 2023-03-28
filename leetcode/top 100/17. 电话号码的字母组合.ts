function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (map[digits]) {
    return map[digits];
  }

  let cur: string[] = map[digits.charAt(0)];

  let next: string[] = letterCombinations(digits.slice(1));
  let result: string[] = [];

  for (let i = 0; i < cur.length; i++) {
    for (let j = 0; j < next.length; j++) {
      result.push(cur[i] + next[j]);
    }
  }
  return result;
}
