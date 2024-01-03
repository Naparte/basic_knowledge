function decodeString(s: string): string {
  let num = "";
  let str = "";
  let stack: string[][] = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (!isNaN(+item)) {
      num += item;
    } else if (item === "[") {
      stack.push([num, str]);
      str = "";
      num = "";
    } else if (item === "]") {
      let top = stack.pop();

      str = top?.[1] + str.repeat(+(top?.[0] || 0));
    } else {
      str += item;
    }
  }

  return str;
}
