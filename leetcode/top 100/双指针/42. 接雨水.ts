function trap(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  while (left < right) {
    lMax = Math.max(height[left], lMax);
    rMax = Math.max(height[right], rMax);

    if (lMax < rMax) {
      result += lMax - height[left];
      left++;
    } else {
      result += rMax - height[right];
      right--;
    }
  }
  return result;
}
