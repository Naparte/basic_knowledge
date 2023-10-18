/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let right = s.length - 1;

  for (let i = 0; i < right; i++) {
    let item = s[i];

    s[i] = s[right];
    s[right] = item;
    right--;
  }
}
