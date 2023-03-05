class MedianFinder {
  minHeap;
  maxHeap;
  constructor() {
    this.minHeap = new minHeap();
    this.maxHeap = new maxHeap();
  }

  addNum(num: number): void {
    this.maxHeap.insert(num);
    if (this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.insert(this.maxHeap.peek);
      this.maxHeap.pop();
    }
    // console.log("before\t", this.maxHeap.heap, this.minHeap.heap);
    if (this.maxHeap.peek > this.minHeap.peek) {
      let maxPeek = this.maxHeap.peek;
      let minPeek = this.minHeap.peek;

      this.maxHeap.pop();
      this.maxHeap.insert(minPeek);

      this.minHeap.pop();
      this.minHeap.insert(maxPeek);
    }

    // console.log("after\t", this.maxHeap.heap, this.minHeap.heap);
  }

  findMedian(): number {
    if (this.minHeap.size === this.maxHeap.size) {
      return (this.minHeap.peek + this.maxHeap.peek) / 2;
    }
    return this.maxHeap.peek;
  }
}

class minHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  moveUp(index: number): void {
    if (!index) {
      return;
    }
    let pindex = this.getPindex(index);
    if (this.heap[pindex] > this.heap[index]) {
      this.swap(pindex, index);
      this.moveUp(pindex);
    }
  }

  moveDown(index: number): void {
    let lIndex = this.getLeft(index);
    let rIndex = this.getRight(index);

    if (this.heap[index] > this.heap[lIndex]) {
      this.swap(index, lIndex);
      this.moveDown(lIndex);
    }

    if (this.heap[index] > this.heap[rIndex]) {
      this.swap(index, rIndex);
      this.moveDown(rIndex);
    }
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  getLeft(index: number): number {
    return 2 * index + 1;
  }

  getRight(index: number): number {
    return 2 * index + 2;
  }

  getPindex(index: number): number {
    return (index - 1) >> 1;
  }

  get peek() {
    return this.heap[0];
  }

  pop() {
    if (this.size === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop() as number;

      this.moveDown(0);
    }
  }
  get size() {
    return this.heap.length;
  }
  insert(val: any): void {
    this.heap.push(val);
    this.moveUp(this.heap.length - 1);
  }
}

class maxHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  moveUp(index: number): void {
    if (!index) {
      return;
    }
    let pindex = this.getPindex(index);
    if (this.heap[pindex] < this.heap[index]) {
      this.swap(pindex, index);
      this.moveUp(pindex);
    }
  }

  moveDown(index: number): void {
    let lIndex = this.getLeft(index);
    let rIndex = this.getRight(index);

    if (this.heap[index] < this.heap[lIndex]) {
      this.swap(index, lIndex);
      this.moveDown(lIndex);
    }

    if (this.heap[index] < this.heap[rIndex]) {
      this.swap(index, rIndex);
      this.moveDown(rIndex);
    }
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  getLeft(index: number): number {
    return 2 * index + 1;
  }

  getRight(index: number): number {
    return 2 * index + 2;
  }

  getPindex(index: number): number {
    return (index - 1) >> 1;
  }

  get peek() {
    return this.heap[0];
  }

  pop() {
    if (this.size === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop() as number;

      this.moveDown(0);
    }
  }

  get size() {
    return this.heap.length;
  }

  insert(val: any): void {
    this.heap.push(val);
    this.moveUp(this.heap.length - 1);
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
