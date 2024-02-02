function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  let mapS1 = new Array(26).fill(0);
  let mapS2 = new Array(26).fill(0);
  let a = "a".charCodeAt(0);
  let len = s1.length;

  for (let i = 0; i < len; i++) {
    mapS1[s1[i].charCodeAt(0) - a]++;
    mapS2[s2[i].charCodeAt(0) - a]++;
  }

  let flag = isSame(mapS1, mapS2);

  if (flag) {
    return true;
  }

  for (let i = len; i < s2.length; i++) {
    mapS2[s2[i].charCodeAt(0) - a]++;
    mapS2[s2[i - len].charCodeAt(0) - a]--;

    if (isSame(mapS1, mapS2)) {
      return true;
    }
  }

  return false;
}

function isSame(arr1: number[], arr2: number[]) {
  return arr1.every((item, index) => item === arr2[index]);
}
