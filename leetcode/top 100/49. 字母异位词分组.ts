function groupAnagrams(strs: string[]): string[][] {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sortStr = str
      .split("")
      .sort((a, b) => {
        return a.charCodeAt(1) - b.charCodeAt(1);
      })
      .join("");

    if (map[sortStr]) {
      map[sortStr].push(str);
    } else {
      map[sortStr] = [str];
    }
  }

  return Object.values(map);
}
