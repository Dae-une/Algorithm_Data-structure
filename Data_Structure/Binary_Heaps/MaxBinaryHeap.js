class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(elem) {
    this.value.push(elem);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.value.length - 1;
    const element = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];

      if (element <= parent) break;

      this.value[parentIdx] = element;
      this.value[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.bubbleDown();
    }ㅠ  
    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];
        if ((!swap && rightChild > element) || (swap && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}
