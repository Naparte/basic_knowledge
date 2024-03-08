function reverseStr(s: string, k: number): string {
  let left = 0;
  let len = s.length;
  let right = 2 * k > len ? len - 1 : 2 * k - 1;
  let temp = s.split("");

  while (left < right) {
    [temp[left], temp[right]] = [temp[right], temp[left]];
    left++;
    right--;
  }

  return temp.join("");
}
