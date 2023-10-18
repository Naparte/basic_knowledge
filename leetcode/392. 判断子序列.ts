function isSubsequence(s: string, t: string): boolean {
  let sPoint = 0;
  let tPoint = 0;
  const len = t.length;

  if (t.length < s.length) {
    return false;
  }

  while (tPoint < len && s[sPoint]) {
    if (t[tPoint] === s[sPoint]) {
      sPoint++;
    }

    tPoint++;
  }

  return sPoint === s.length;
}
