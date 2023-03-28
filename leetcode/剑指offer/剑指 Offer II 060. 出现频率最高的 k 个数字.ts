interface heapItem {
  key: number | string;
  value: number;
}

function topKFrequent(nums: number[], k: number): number[] {
  let map = {};

  nums.forEach((value, index) => {
    map[value] = (map[value] || 0) + 1;
  });

  let mHeap: minHeap = new minHeap();

  Object.keys(map).forEach((value) => {
    mHeap.insert({ key: map[value], value } as unknown as heapItem);
    if (mHeap.size > k) {
      mHeap.pop();
    }
  });

  return mHeap.heap.map((item) => {
    return (item as any).value;
  });
}

class minHeap {
  heap: heapItem[];
  constructor() {
    this.heap = [];
  }
  insert(obj: heapItem): void {
    this.heap.push(obj);
    this.moveUp(this.heap.length - 1);
  }

  pop() {
    if (this.size === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop() as heapItem;
      this.moveDown(0);
    }
  }

  moveUp(index: number) {
    if (!index) {
      return;
    }
    let pIndex = this.getPindex(index);
    if (this.heap[index].key < this.heap[pIndex]?.key) {
      this.swap(index, pIndex);
      this.moveUp(pIndex);
    }
  }

  moveDown(index) {
    let lIndex = this.getLindex(index);
    let rIndex = this.getRindex(index);

    if (this.heap[index].key > this.heap[lIndex]?.key) {
      this.swap(lIndex, index);
      this.moveDown(lIndex);
    }
    if (this.heap[index].key > this.heap[rIndex]?.key) {
      this.swap(rIndex, index);
      this.moveDown(rIndex);
    }
  }

  swap(i, j): void {
    let temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
  }

  getPindex(index: number) {
    return (index - 1) >> 1;
  }

  getLindex(index: number) {
    return 2 * index + 1;
  }

  getRindex(index: number): number {
    return 2 * index + 2;
  }

  get peek(): heapItem {
    return this.heap[0];
  }

  get size(): number {
    return this.heap.length;
  }
}
