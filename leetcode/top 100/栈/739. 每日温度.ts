function dailyTemperatures(temperatures: number[]): number[] {
  let stack: { index: number; val: number }[] = [];

  let result = new Array(temperatures.length).fill(0);

  temperatures.forEach((val, index) => {
    let top = stack[stack.length - 1];
    if (!stack.length || val < (top && top.val)) {
      stack.push({
        index,
        val,
      });
    } else {
      while (val > (top && top.val)) {
        stack.pop();
        result[top.index] = index - top.index;
        top = stack[stack.length - 1];
      }
      stack.push({
        index,
        val,
      });
    }
  });

  return result;
}
