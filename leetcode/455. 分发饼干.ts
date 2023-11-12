function findContentChildren(g: number[], s: number[]): number {
  let result: number = 0;
  g.sort((a, b) => {
    return a - b;
  });

  s.sort((a, b) => {
    return a - b;
  });

  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
      j++;
      result++;
    }
    if (g[i] > s[j]) {
      j++;
    }
  }

  return result;
}
