function merge(intervals: number[][]): number[][] {
  intervals.sort((item1, item2) => {
    return item1[0] - item2[0];
  });

  return intervals.reduce(
    (calculate: number[][], item: number[]): number[][] => {
      let pre = calculate.pop();

      if (!pre) {
        calculate.push(item);
        return calculate;
      }

      if (item[0] >= pre[0] && item[0] <= pre[1]) {
        pre[1] = Math.max(pre[1], item[1]);
        calculate.push(pre);
      } else {
        calculate.push(pre, item);
      }

      return calculate;
    },
    []
  ) as unknown as number[][];
}
