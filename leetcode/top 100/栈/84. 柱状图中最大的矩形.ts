function largestRectangleArea(heights: number[]): number {
  let stack: number[] = [];
  let width = new Array(heights.length).fill(1);
  let result = 0;
  heights.forEach((h, index) => {
    while (stack.length && heights[stack[stack.length - 1]] >= h) {
      stack.pop();
    }

    if (!stack.length) {
      width[index] = index + 1;
    } else {
      width[index] = index - stack[stack.length - 1];
    }
    stack.push(index);
  });

  stack = [];

  for (let index = heights.length - 1; index >= 0; index--) {
    const h = heights[index];

    while (stack.length && heights[stack[stack.length - 1]] > h) {
      stack.pop();
    }

    if (!stack.length) {
      width[index] += heights.length - 1 - index;
    } else {
      width[index] += stack[stack.length - 1] - index - 1;
    }

    stack.push(index);

    result = Math.max(result, width[index] * h);
  }

  return result;
}
