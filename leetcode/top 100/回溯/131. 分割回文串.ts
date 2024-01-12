function partition(s: string): string[][] {
  let result: string[][] = [];
  let len = s.length;
  function dfc(arr: string[], start: number) {
    if (start === s.length) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < len; i++) {
      let temp = s.slice(start, i + 1);
      if (check(temp)) {
        arr.push(temp);
        dfc(arr, i + 1);
        arr.pop();
      }
    }
  }

  dfc([], 0);
  return result;
}

let map = new Map();
function check(str) {
  if (map.has(str)) {
    return map.get(str);
  }

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      map.set(str, false);
      return false;
    }
    left++;
    right--;
  }
  map.set(str, true);
  return true;
}
