function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  let mHeap = new maxHeap(k);
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let item = [nums1[i], nums2[j]];
      let max = mHeap.peek;
      // if (mHeap.size === k && max && max[0] + max[1] < item[0] + item[1]) {
      //   break;
      // }
      mHeap.insert(item);
      console.log(mHeap.heap);
    }
  }

  return mHeap.heap;
}

class maxHeap {
  heap: number[][];
  maxSize;
  constructor(k: number) {
    this.heap = [];
    this.maxSize = k;
  }

  moveUp(index: number): void {
    if (!index) {
      return;
    }
    let pindex = this.getPindex(index);
    let cItem = this.heap[index];
    let pItem = this.heap[pindex];
    if (pItem[0] + pItem[1] < cItem[0] + cItem[1]) {
      this.swap(pindex, index);
      this.moveUp(pindex);
    }
  }

  moveDown(index: number): void {
    let lIndex = this.getLeft(index);
    let rIndex = this.getRight(index);

    let cItem = this.heap[index];
    let lItem = this.heap[lIndex];
    let rItem = this.heap[rIndex];

    if (lItem && cItem[0] + cItem[1] < lItem[0] + lItem[1]) {
      this.swap(index, lIndex);
      this.moveDown(lIndex);
    }

    if (rItem && cItem[0] + cItem[1] < rItem[0] + rItem[1]) {
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
      this.heap[0] = this.heap.pop() as number[];

      this.moveDown(0);
    }
  }

  get size() {
    return this.heap.length;
  }

  insert(item) {
    this.heap.push(item);
    this.moveUp(this.heap.length - 1);
    if (this.size > this.maxSize) {
      this.pop();
    }
  }
}
