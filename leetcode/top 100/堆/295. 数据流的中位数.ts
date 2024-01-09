class maxHeap {
  _heap: number[];
  constructor() {
    this._heap = [];
  }
  get peek() {
    return this._heap[0];
  }
  get size() {
    return this._heap.length;
  }

  up(index) {
    let pIndex = this._getPindex(index);
    // 最大堆：大于父节点上移
    if (this._heap[index] > this._heap[pIndex]) {
      this.swap(index, pIndex);
      this.up(pIndex);
    }
  }
  down(index) {
    // 下移的时候需要判断子节点哪一个大 ，和大的对比然后调换
    let lIndex = this._getLeft(index);
    let rIndex = this._getRight(index);
    let maxIndex = this._heap[lIndex] > this._heap[rIndex] ? lIndex : rIndex;

    if (this._heap[index] < this._heap[maxIndex]) {
      this.swap(index, maxIndex);
      this.down(maxIndex);
    }
  }

  insert(item) {
    this._heap.push(item);
    this.up(this.size - 1);
  }
  pop() {
    if (!this.size) {
      return;
    }
    if (this.size === 1) {
      this._heap.pop();
    } else {
      this._heap[0] = this._heap.pop();
      this.down(0);
    }
  }
  swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _getLeft(index) {
    return 2 * index + 1;
  }

  _getRight(index) {
    return 2 * index + 2;
  }

  _getPindex(index) {
    return (index - 1) >> 1;
  }
}

class MedianFinder {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  addNum(num: number): void {
    this.heap.push(num);
  }

  findMedian(): number {
    this.heap.sort((a, b) => {
      return a - b;
    });
    let len = this.heap.length;
    if (len % 2) {
      return this.heap[(len - 1) / 2];
    }

    return (this.heap[len / 2] + this.heap[len / 2 - 1]) / 2;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
