function decodeString(s: string): string {
  let num = 0;
  let str = "";

  let result = "";
  let code0 = "0".charCodeAt(0);
  let code9 = "9".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    console.log(num, str);

    if (code0 <= char.charCodeAt(0) && code9 >= char.charCodeAt(0)) {
      num += char;
    } else if (s[i] === "]") {
      let count = +num;

      while (count) {
        result += str;
        count--;
      }
      console.log(result);

      num = "";
      str = "";
    } else if (s[i - 1] === "[" || str) {
      str += char;
    } else if (s[i] !== "[") {
      result += char;
    }
  }

  return result;
}
