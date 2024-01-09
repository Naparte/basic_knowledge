function minWindow(s: string, t: string): string {
  let n = s.length,
    tot = 0;
  const c1 = Array(60).fill(0),
    c2 = Array(60).fill(0);

  for (const x of t) {
    if (++c1[getIdx(x)] === 1) tot++;
  }

  console.log(c1);

  let ans = "";
  for (let i = 0, j = 0; i < n; i++) {
    const idx1 = getIdx(s[i]);
    if (++c2[idx1] == c1[idx1]) tot--;

    while (j < i) {
      const idx2 = getIdx(s[j]);
      if (c2[idx2] > c1[idx2] && --c2[idx2] >= 0) j++;
      else break;
    }
    if (tot == 0 && (!ans || ans.length > i - j + 1))
      ans = s.substring(j, i + 1);
  }
  return ans;
}

function getIdx(x: string): number {
  return x >= "A" && x <= "Z"
    ? x.charCodeAt(0) - "A".charCodeAt(0) + 26
    : x.charCodeAt(0) - "a".charCodeAt(0);
}
