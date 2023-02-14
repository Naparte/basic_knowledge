function replaceSpace(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === " ") {
      result += "%20";
    } else {
      result += char;
    }
  }
  return result;
}
