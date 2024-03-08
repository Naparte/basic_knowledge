function intersection(nums1: number[], nums2: number[]): number[] {
  let arr1 = Array.from(new Set(nums1)).sort((a, b) => {
    return a - b;
  });
  let arr2 = Array.from(new Set(nums2)).sort((a, b) => {
    return a - b;
  });
  let i = 0;
  let j = 0;
  let result: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
      continue;
    }
    if (arr1[i] < arr2[j]) {
      i++;
    }
    if (arr1[i] > arr2[j]) {
      j++;
    }
  }

  return result;
}
