function isValid(s: string): boolean {
  let stack: string[] = [];

  let map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (map[item]) {
      stack.push(item);
    } else {
      if ((map[stack[stack.length - 1]] === item)) {
        stack.pop();
      }else {
        stack.push(item)
      }
    }
  }

  return !stack.length;
}
