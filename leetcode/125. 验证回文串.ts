function isPalindrome(s: string): boolean {
  let arr: string[] = [];
  let codeA = "a".charCodeAt(0);
  let codeZ = "z".charCodeAt(0);
  let code0 = "0".charCodeAt(0);
  let code9 = "9".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    let item = s[i].toLocaleLowerCase();
    let itemCode = item.charCodeAt(0);
    if (
      (codeA <= itemCode && itemCode <= codeZ) ||
      (code0 <= itemCode && itemCode <= code9)
    ) {
      arr.push(item);
    }
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
