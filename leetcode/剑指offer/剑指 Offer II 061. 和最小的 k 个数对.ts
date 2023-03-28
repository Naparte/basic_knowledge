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
    }
  }

  return mHeap.heap.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  ;
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
      console.log(this.heap[0]);
      this.heap[0] = this.heap.pop() as number[];

      this.moveDown(0);
    }
  }

  get size() {
    return this.heap.length;
  }

  insert(item) {
    if (this.size < this.maxSize) {
      this.heap.push(item);
      this.moveUp(this.heap.length - 1);
    }else if(item[0]+ item[1]< this.peek[0] + this.peek[1]){
      this.heap[0] = item;
      this.moveDown(0);
    }

  }
}
