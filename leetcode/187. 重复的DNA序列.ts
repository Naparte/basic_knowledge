function findRepeatedDnaSequences(s: string): string[] {
  let map = new Map();
  let result: string[] = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str += s[i];
    if (str.length > 9) {

      if (map.has(str)) {
        let count = map.get(str);

        if (count === 1) {
          result.push(str);
        }

        map.set(str, count + 1);
      } else {
        map.set(str, 1);
      }
      str = str.slice(1);
    }
  }

  return result;
}
