function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => {
    return a - b;
  });

  return nums[nums.length - k];
}



class maxHeap {
    insert(num: number) {
        throw new Error("Method not implemented.");
    }

}