function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;

  let right = height.length - 1;

  while (left < right) {
    result = Math.max(
      result,
      Math.min(height[left], height[right]) * (right - left)
    );

    height[left] < height[right] ? left++ : right--;
  }

  return result;
}
