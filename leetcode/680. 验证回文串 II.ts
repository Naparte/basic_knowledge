function validPalindrome(s: string): boolean {
  let flag = false;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      if (!flag) {
        if (s[left + 1] === s[right]) {
          left++;
          flag = true;
          console.log("left1", left, "right", right);
        } else if (s[left] === s[right - 1]) {
          right--;
          flag = true;
          console.log("left2", left, "right", right);
        } else {
          console.log("left3", left, "right", right);
          return false;
        }
      } else {
        console.log("left4", left, "right", right);
        return false;
      }
    }

    left++;
    right--;
  }

  return true;
}
