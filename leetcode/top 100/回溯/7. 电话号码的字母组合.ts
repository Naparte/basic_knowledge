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

  let result: string[] = [];
  let len = digits.length;
  function dfc(level, str: string) {
    if (level === len) {
      result.push(str);
      return;
    }

    for (let i = 0; i < map[digits[level]].length; i++) {
      dfc(level + 1, str + map[digits[level]][i]);
    }
  }

  dfc(0, "");

  return result;
}
