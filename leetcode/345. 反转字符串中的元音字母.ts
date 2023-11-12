function reverseVowels(s: string): string {
  const map = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  let len = s.length;
  let i = 0;
  let j = len - 1;
  let result = s.split("");
  while (i < j) {
    let left = s[i];
    let right = s[j];
    if (map[left] && map[right]) {
      result[i] = right;
      result[j] = left;
      i++;
      j--;
      continue;
    }
    if (map[left]) {
      j--;
    } else if (map[right]) {
      i++;
    } else {
      i++;
      j--;
    }
  }

  return result.join("");
}
