class KthLargest {
  public nums: number[];
  public k: number;
  constructor(k: number, nums: number[]) {
    this.nums = nums.sort((a, b) => {
      return a - b;
    });
    this.k = k;
  }

  add(val: number): number {
    this.nums.push(val);
    return this.nums.sort((a, b) => {
      return a - b;
    })[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
