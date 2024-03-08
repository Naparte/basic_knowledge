function maxSlidingWindow(nums: number[], k: number): number[] {
  let res: number[] = [];
  let que: number[] = [];

  for (let i = 0; i < k; i++) {
    while (que.length && nums[i] >= nums[que[que.length - 1]]) {
      que.pop();
    }

    que.push(i);
  }

  res.push(nums[que[0]]);

  for (let i = k; i < nums.length; i++) {
    while (que.length && nums[i] > nums[que[que.length - 1]]) {
      que.pop();
    }
    while (que.length && que[0] <= i - k) {
      que.shift();
    }
    que.push(i);

    res.push(nums[que[0]]);
  }

  return res;
}
